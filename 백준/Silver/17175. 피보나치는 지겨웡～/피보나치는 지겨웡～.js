const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const dp = [];
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1] + 1) % 1000000007;
}

console.log(dp[input]);