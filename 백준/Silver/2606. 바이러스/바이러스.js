const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const com = +input.shift(); // 컴퓨터 갯수
const cases = +input.shift();

const graph = Array.from({ length: com + 1 }, () => new Array());
const edges = input.map((line) => line.split(" ").map(Number));
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(start) {
  const stack = [];
  const visited = [];
  stack.push(start);

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      stack.push(...graph[node]);
    }
  }

  return visited.length - 1;
}

console.log(dfs(1));