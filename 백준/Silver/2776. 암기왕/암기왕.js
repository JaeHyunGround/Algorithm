const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === target) return 1;

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return 0;
}

const testCase = +input.shift();
let answer = [];
for (let i = 0; i < testCase; i++) {
  let [N, NArr, M, MArr] = input.splice(0, 4);
  let sortNArr = NArr.split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  MArr.split(" ").forEach((num) =>
    answer.push(BinarySearch(sortNArr, Number(num)))
  );
}

console.log(answer.join("\n"));