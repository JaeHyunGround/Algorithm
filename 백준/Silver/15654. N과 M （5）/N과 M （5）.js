const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = "";

function dfs(current, length) {
  if (length === M) {
    const result = current.join(" ");
    answer += result + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (current.includes(arr[i])) continue;
    dfs([...current, arr[i]], length + 1);
  }
}

for (let i = 0; i < arr.length; i++) {
  dfs([arr[i]], 1);
}

console.log(answer);