const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const T = input.map((line) => +line).sort((a, b) => a - b);

const binarySearch = (array) => {
  let left = BigInt(1);
  let right = BigInt(array[N - 1] * M);
  let mid = BigInt((left + right) / 2n);
  let answer = right;

  while (left <= right) {
    let count = BigInt(0);
    array.forEach((time) => {
      count += mid / BigInt(time);
    });

    if (count >= M) {
      answer = mid;
      right = mid - 1n;
    } else {
      left = mid + 1n;
    }

    mid = BigInt((left + right) / 2n);
  }

  return answer;
};

console.log(binarySearch(T).toString());

// JS Number 표현 가능 범위는 2^-53 + 1 ~ 2^53 - 1이다. 이는 약 10^16
// 10^16을 벗어나는 범위가 나오게 된다면 BigInt 사용해야함.
// 이 문제에선 범위가 ~10^9까지 나온다. 문제를 풀다보면 최대값이 10^18까지 나오는데
// BigInt 처리를 안해주면 무한루프에 빠지기 때문에 BigInt 무조건 필요
