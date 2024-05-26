const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

let limit = 1000000007;

function solution(num) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= num; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1] + 1) % limit;
  }

  return dp[num];
}

console.log(solution(input));