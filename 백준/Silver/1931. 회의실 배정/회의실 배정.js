const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const sortArr = input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let count = 0;
let answer = 0;
sortArr.forEach((line) => {
  const [start, finish] = line;

  if (start >= count) {
    answer += 1;
    count = finish;
  }
});

console.log(answer);