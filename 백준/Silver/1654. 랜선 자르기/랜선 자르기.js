const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ");
const array = input.map(Number).sort((a, b) => a - b);

function binarySearch(array) {
  let left = 1;
  let right = Math.max(...array);
  let mid = Math.floor((right + left) / 2);

  while (left <= right) {
    let pieces = array
      .map((length) => Math.floor(length / mid))
      .reduce((acc, cur) => acc + cur, 0);

    if (pieces >= N) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((right + left) / 2);
  }

  return mid;
}

console.log(binarySearch(array));