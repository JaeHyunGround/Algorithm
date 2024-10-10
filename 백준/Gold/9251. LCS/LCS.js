const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [A, B] = fs.readFileSync(filePath).toString().trim().split("\n");

const m = A.length;
const n = B.length;

const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[m][n]);