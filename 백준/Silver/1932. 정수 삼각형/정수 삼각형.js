const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));
const dp = [input[0]];

for (let i = 1; i < input.length; i++) {
  let arr = [];

  for (let j = 0; j < input[i].length; j++) {
    let value = 0;
    if (j === 0) {
      value = input[i][0] + dp[i - 1][0];
    } else if (j === input[i].length - 1) {
      value = input[i][j] + dp[i - 1][dp[i - 1].length - 1];
    } else {
      value = Math.max(
        input[i][j] + dp[i - 1][j - 1],
        input[i][j] + dp[i - 1][j]
      );
    }
    arr.push(value);
  }

  dp[i] = arr;
}

console.log(Math.max(...dp[dp.length - 1]));