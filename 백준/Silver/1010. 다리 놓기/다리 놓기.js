const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = +input.shift();

let num = 0;

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

for (let i = 0; i < A; i++) {
  const arr = input[i].split(" ");
  const N = +arr[0];
  const M = +arr[1];
  console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
}
