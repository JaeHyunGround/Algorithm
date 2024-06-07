const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const cases = input[0];
const dp = new Array(cases + 1);
dp[1] = input[1];
dp[2] = dp[1] + input[2];
dp[3] = Math.max(input[1] + input[3], input[2] + input[3]);

for (let i = 4; i <= cases; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

console.log(dp[cases]);