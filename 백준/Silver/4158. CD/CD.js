const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === target) {
      return 1;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return 0;
}

let answer = [];
while (true) {
  const [N, M] = input.shift().split(" ").map(Number);

  if (N === 0 && M === 0) break;

  const NCD = input.splice(0, N).map(Number);
  const MCD = input.splice(0, M).map(Number);
  let result = 0;

  if (N < M) {
    NCD.forEach((cd) => {
      result += BinarySearch(MCD, cd);
    });
  } else {
    MCD.forEach((cd) => {
      result += BinarySearch(NCD, cd);
    });
  }

  answer.push(result);
}

console.log(answer.join("\n"));