const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((value) => +value));

const [N, M] = info;

const solution = () => {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [A, B] = input[i];
    graph[B].push(A);
  }

  let answer = [];
  let max = 0;

  const dfs = (start) => {
    let stack = [start];
    let visited = Array.from({ length: N + 1 }, () => false);
    let count = 1;

    visited[start] = true;

    while (stack.length) {
      const node = stack.pop();
      for (let i = 0; i < graph[node].length; i++) {
        if (!visited[graph[node][i]]) {
          count += 1;
          visited[graph[node][i]] = true;
          stack.push(graph[node][i]);
        }
      }

      // for 구문 대신 아래 로직을 사용하면 시간 초과 남.
      //   if (!visited[node]) {
      //     visited[node] = true;
      //     count += 1;
      //     stack.push(...graph[node]);
      //   }
    }

    if (count < max) {
      return;
    } else if (count === max) {
      answer.push(start);
    } else {
      max = count;
      answer = [start];
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(i);
  }

  return answer.join(" ");
};

console.log(solution());
