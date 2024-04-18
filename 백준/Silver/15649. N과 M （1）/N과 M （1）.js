const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = +input.shift();
const M = +input.shift();

const visited = new Array(N + 1);
let output = [];
let answer = "";

function dfs(cnt) {
  if (cnt === M) {
    answer += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer.trim());