const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(N, M) {
  const visited = new Array(N + 1);
  const output = [];
  const answer = [];

  const dfs = (depth, index) => {
    if (depth === M) {
      answer.push(output.join(" "));
      return;
    }

    for (let i = index; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i);
      dfs(depth + 1, i);
      output.pop();
      visited[i] = false;
    }
  };

  dfs(0, 1);
  return answer.join("\n");
}

console.log(solution(N, M));