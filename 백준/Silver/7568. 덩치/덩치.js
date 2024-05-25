const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = [];
const compareArray = new Array(N).fill(0);

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);
  arr.push([x, y]);
});

for (let i = 0; i < N; i++) {
  const [curX, curY] = arr[i];
  for (let j = i; j < N; j++) {
    const [comX, comY] = arr[j];
    if (curX < comX && curY < comY) compareArray[i] += 1;
    else if (curX > comX && curY > comY) compareArray[j] += 1;
  }
}

const answer = compareArray.map((num) => (num += 1));
console.log(answer.join(" "));