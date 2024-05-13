const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  const dp = new Array(input[i] + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= input[i]; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }

  console.log(dp[input[i]]);
}