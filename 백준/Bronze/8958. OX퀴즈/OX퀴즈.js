const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const answer = [];
for (let i = 0; i < N; i++) {
  const lineArr = input[i].split("");
  let sum = 0;
  let count = 0;
  for (let j = 0; j < lineArr.length; j++) {
    if (lineArr[j] === "O") {
      count += 1;
      sum += count;
    } else count = 0;
  }
  answer.push(sum);
}

console.log(answer.join("\n"));