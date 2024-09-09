const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = +input;
const queens = [];
let count = 0;

function possible(x, y) {
  for (const [a, b] of queens) {
    if (x === a || y === b) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }

  return true;
}

function dfs(row) {
  if (row === N) {
    count += 1;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);

console.log(count);