const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const A = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1].split(" ").map(Number);
const copyB = [...B];

const newA = Array.from({ length: A.length }, () => 0);

for (let i = 0; i < N; i++) {
  let maxIndexOfB = B.indexOf(Math.max(...B));
  newA[maxIndexOfB] = A[i];

  B.splice(maxIndexOfB, 1, -1);
}

let answer = 0;
for (let j = 0; j < N; j++) {
  answer += newA[j] * copyB[j];
}

console.log(answer);