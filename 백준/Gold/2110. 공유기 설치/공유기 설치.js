const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const house = input.map(Number).sort((a, b) => a - b);

// 이진 탐색(매개변수 탐색)
let start = 1; // 나올 수 있는 최소값
let end = house[house.length - 1]; // 나올 수 있는 최댓값
let mid = Math.floor((start + end) / 2); // 가장 인접한 두 공유기 사이의 최대 거리

while (start <= end) {
  let count = 1;
  let prev = house[0];
  for (const cur of house) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < C) end = mid - 1;
  else start = mid + 1;

  mid = Math.floor((start + end) / 2);
}

console.log(end);