const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = [];
let arr = Array(M).fill("");

const dfs = (lev, start) => {
  if (lev === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    arr[lev] = i;
    dfs(lev + 1, i);
  }
};

dfs(0, 1);

console.log(answer.join("\n"));