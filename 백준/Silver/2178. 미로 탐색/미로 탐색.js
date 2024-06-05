const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [c, r] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split("").map(Number));

function bfs(start) {
  const queue = [start];
  const visited = Array.from({ length: c }, () => new Array(r).fill(0));
  visited[start[0]][start[1]] = 1;

  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  while (queue.length > 0) {
    const [currentC, currentR] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextC = currentC + dc[i];
      const nextR = currentR + dr[i];

      if (nextC < 0 || nextR < 0 || nextC >= c || nextR >= r) continue;

      if (map[nextC][nextR] === 1 && !visited[nextC][nextR]) {
        visited[nextC][nextR] = visited[currentC][currentR] + 1;
        queue.push([nextC, nextR]);
      }
    }
  }

  return visited[c - 1][r - 1];
}

console.log(bfs([0, 0]));