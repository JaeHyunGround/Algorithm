const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let answer = 1;
let start = 0;
let width = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    start = +input[i][j];
    for (let k = j + 1; k < M; k++) {
      if (+input[i][k] === start) {
        width = k - j + 1;
        if (
          i + width - 1 < N &&
          start === +input[i + width - 1][j] &&
          input[i + width - 1][j] === input[i + width - 1][k] &&
          width * width > answer
        ) {
          answer = width * width;
        }
      }
    }
  }
}

console.log(answer);
