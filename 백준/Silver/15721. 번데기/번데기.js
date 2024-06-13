const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = +input[0];
const T = +input[1];
const flag = +input[2];
let n = 0;
let cnt = 0;
let answer = 0;

while (true) {
  n += 1;
  const arr = [0, 1, 0, 1];
  for (let i = 1; i <= n + 1; i++) arr.push(0);
  for (let i = 1; i <= n + 1; i++) arr.push(1);

  for (const x of arr) {
    if (x === flag) cnt++;
    if (cnt === T) {
      console.log(answer);
      return;
    }

    answer += 1;
    answer %= A;
  }
}