const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
let dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    dp[i][j] =
      board[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
  }
}

let answer = [];

for (let i = N + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  answer.push(
    dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]
  );
}
console.log(answer.join("\n"));