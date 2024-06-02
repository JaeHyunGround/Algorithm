const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input.shift().split(" ").map(Number);
const map = new Array(c).fill([]);

for (let i = 0; i < c; i++) {
  const line = input[i].split(" ").map(Number);
  map[i] = line;
}

function bfs(start) {
  const stack = [start];
  const visited = Array.from({ length: c }, () => new Array(r).fill(false));

  const dr = [1, 0];
  const dc = [0, 1];

  while (stack.length > 0) {
    const [currentC, currentR] = stack.pop();

    if (!visited[currentC][currentR]) {
      visited[currentC][currentR] = true;

      for (let j = 0; j < 2; j++) {
        const nextR = currentR + dr[j];
        const nextC = currentC + dc[j];

        if (nextR < 0 || nextC < 0 || nextR >= r || nextC >= c) continue;

        if (map[nextC][nextR] === 1) {
          stack.push([nextC, nextR]);
        }
      }
    }
  }

  return visited[c - 1][r - 1] ? "Yes" : "No";
}

console.log(bfs([0, 0]));