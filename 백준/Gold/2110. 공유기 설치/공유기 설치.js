const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const house = input.map(Number).sort((a, b) => a - b);

const binarySearch = (arr) => {
  let start = 1;
  let end = arr[arr.length - 1];
  let mid = Math.floor((start + end) / 2);
  let answer = end;

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
      answer = mid; // 최댓값을 구하는 문제이니깐 mid가 커져갈 때 answer을 업데이트
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return answer;
};

console.log(binarySearch(house));