const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = [];
const result = [];
const visited = Array.from({ length: arr.length }, () => false);
const dfs = (result) => {
  if (result.length === M) {
    if (!answer.includes(result.join(" "))) {
      answer.push(result.join(" "));
      return;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] === false) {
      result.push(arr[i]);
      visited[i] = true;
      dfs(result);
      visited[i] = false;
      result.pop();
    }
  }
};

dfs(result);
console.log(answer.join("\n"));