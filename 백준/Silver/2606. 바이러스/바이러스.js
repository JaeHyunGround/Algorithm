const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// bfs를 사용하면 될듯

const N = +input.shift();
const M = +input.shift();

const graph = [...Array(N + 1)].map(() => []);
const edges = input.map((line) => line.split(" ").map(Number));
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (startNode) => {
  const queue = [startNode];
  const visitedNodes = [];
  while (queue.length) {
    const node = queue.pop();
    if (!visitedNodes.includes(node)) {
      visitedNodes.push(node);
      queue.push(...graph[node]);
    }
  }

  return visitedNodes;
};

console.log(dfs(1).length - 1);