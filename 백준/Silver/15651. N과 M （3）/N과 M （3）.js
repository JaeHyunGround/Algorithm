const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const solution = (N, M) => {
  const output = [];
  const answer = [];

  const dfs = (depth) => {
    if (depth === M) {
      answer.push(output.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      output.push(i);
      dfs(depth + 1);
      output.pop();
    }
  };

  dfs(0);
  return answer.join("\n");
};

console.log(solution(N, M));