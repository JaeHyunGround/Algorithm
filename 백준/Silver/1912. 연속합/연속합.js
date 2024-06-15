const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const numArr = input[0].split(" ").map(Number);

const dp = [numArr[0]];
for (let i = 1; i < n; i++) {
  dp[i] = numArr[i] > numArr[i] + dp[i - 1] ? numArr[i] : numArr[i] + dp[i - 1];
}

console.log(Math.max(...dp));