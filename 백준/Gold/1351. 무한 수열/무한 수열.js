const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, P, Q] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dict = {};
dict[0] = 1;

function solution(i) {
  if (i in dict) return dict[i];

  return (dict[i] = solution(Math.floor(i / P)) + solution(Math.floor(i / Q)));
}

console.log(solution(N));