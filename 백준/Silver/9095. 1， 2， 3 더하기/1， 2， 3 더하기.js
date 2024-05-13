const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const testCase = input[0];
const answer = [];

function solution(num) {
  const dp = new Array(num + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= num; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  return dp[num];
}

for (let i = 1; i <= testCase; i++) {
  answer.push(solution(input[i]));
}

console.log(answer.join("\n"));