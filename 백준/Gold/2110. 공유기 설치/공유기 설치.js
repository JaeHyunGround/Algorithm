const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const house = input.map(Number).sort((a, b) => a - b);

const binarySearch = (arr) => {
  let start = 1;
  let end = arr[arr.length - 1];
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    let count = 1;
    let num = arr[0];

    for (const cur of arr) {
      if (cur - num < mid) continue;
      num = cur;
      count += 1;
    }

    if (count < C) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
};

console.log(binarySearch(house));