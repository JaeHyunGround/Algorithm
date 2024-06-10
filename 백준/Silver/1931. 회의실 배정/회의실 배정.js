const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const solution = (timeTable) => {
  const sortTable = timeTable.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let count = 0; // 끝나는 시간을 저장
  let answer = 0;
  sortTable.forEach((line) => {
    const [start, finish] = line;

    if (start >= count) {
      answer += 1;
      count = finish;
    }
  });

  return answer;
};

console.log(solution(input));