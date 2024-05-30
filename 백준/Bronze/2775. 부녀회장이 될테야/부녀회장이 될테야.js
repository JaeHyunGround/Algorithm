const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const testCase = input.shift();
const answer = [];

for (let i = 0; i < input.length; i += 2) {
  let k = input[i];
  let n = input[i + 1];
  const dp = Array.from({ length: k + 1 }, () => [0]);

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let x = 1; x <= k; x++) {
    for (let y = 1; y <= n; y++) {
      dp[x][y] = dp[x][y - 1] + dp[x - 1][y];
    }
  }

  answer.push(dp[k][n]);
}

console.log(answer.join("\n"));