const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const cost = input.map((line) => line.split(" ").map(Number));
const dp = cost;

for (let i = 1; i < N; i++) {
  dp[i][0] = cost[i][0] + Math.min(cost[i - 1][1], cost[i - 1][2]);
  dp[i][1] = cost[i][1] + Math.min(cost[i - 1][0], cost[i - 1][2]);
  dp[i][2] = cost[i][2] + Math.min(cost[i - 1][0], cost[i - 1][1]);
}

console.log(Math.min(...dp[N - 1]));