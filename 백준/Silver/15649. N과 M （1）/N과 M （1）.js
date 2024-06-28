const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(N, M) {
  const visited = new Array(N + 1);
  const output = [];
  const answer = [];

  const dfs = (depth) => {
    if (depth === M) {
      answer.push(output.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i);
      dfs(depth + 1);
      output.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  return answer.join("\n");
}

console.log(solution(N, M));