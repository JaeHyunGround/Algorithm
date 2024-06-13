const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const M = +input.pop();
const costArr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function binarySearch(input, N, M) {
  let left = 1;
  let right = input[N - 1];
  let mid = Math.floor((right + left) / 2);

  let newCostArr = [];
  let totalCost = 0;

  while (left <= right) {
    newCostArr = costArr.map((num) => (num >= mid ? mid : num));
    totalCost = newCostArr.reduce((acc, cur) => acc + cur, 0);

    if (totalCost <= M) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }

  return mid;
}

console.log(binarySearch(costArr, N, M));