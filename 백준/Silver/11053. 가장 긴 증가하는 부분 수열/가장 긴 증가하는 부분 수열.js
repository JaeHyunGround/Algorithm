const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = +input.shift();
const arr = input[0].split(" ").map(Number);

const dp = new Array(cases);
dp[0] = 1;

for (let i = 1; i <= cases; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[j] < arr[i]) {
      max = Math.max(max, dp[j]);
    }
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));