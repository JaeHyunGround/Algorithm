const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = +input.shift();
const answer = [];

const dp = [];
dp[0] = [1, 0];
dp[1] = [0, 1];

input.forEach((num) => {
  for (let i = 2; i <= num; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  answer.push(dp[num].join(" "));
});

console.log(answer.join("\n"));