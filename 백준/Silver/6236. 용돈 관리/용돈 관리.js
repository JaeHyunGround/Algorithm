const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

const binarySearch = (arr) => {
  let start = Math.max(...arr);
  let end = arr.reduce((acc, cur) => acc + cur, 0);
  let mid = Math.floor((start + end) / 2);
  let answer = mid;

  while (start <= end) {
    let sum = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > mid) {
        count += 1;
        sum = arr[i];
      }
    }

    if (count > M) {
      start = mid + 1;
    } else {
      end = mid - 1;
      answer = mid;
    }
    mid = Math.floor((start + end) / 2);
  }

  return answer;
};

console.log(binarySearch(arr));