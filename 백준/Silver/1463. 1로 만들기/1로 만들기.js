const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

const num = Number(input);

const dp = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[num]);