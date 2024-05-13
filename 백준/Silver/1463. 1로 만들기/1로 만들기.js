const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(input + 1).fill(0);
dp[1] = 0;

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  }
  if (i % 3 === 0 && i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1, dp[i / 2] + 1);
  }
}

console.log(dp[input]);