const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
const answer = [];
const dfs = (result, index) => {
  if (result.length === M) {
    if (!answer.includes(result.join(" "))) {
      answer.push(result.join(" "));
    }
    return;
  }

  for (let i = index; i < N; i++) {
    result.push(arr[i]);
    dfs(result, i);
    result.pop();
  }
};

dfs(result, 0);
console.log(answer.join("\n"));