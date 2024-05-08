const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = Array.from({ length: N + 1 }, () => []);
input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  map[a].push(b);
  map[b].push(a);
});

let answer = -1;
map.forEach((maps) => {
  if (maps.length === 0) answer += 1;
});

function DFS(map, start) {
  const stack = [start];
  const visited = [];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (visited.indexOf(currentNode) === -1) {
      visited.push(currentNode);
      stack.push(...map[currentNode]);
      map[currentNode] = [];
    }
  }

  answer += 1;
  map.forEach((node) => {
    if (node.length) {
      DFS(map, node[0]);
    }
  });
}

if (M === 0) {
  console.log(N);
} else {
  DFS(map, input[0].split(" ").map(Number)[0]);
  console.log(answer);
}