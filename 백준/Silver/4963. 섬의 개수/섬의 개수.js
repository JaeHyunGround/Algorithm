const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

while (input.length > 1) {
  const [w, h] = input.shift().split(" ").map(Number);
  let temp = h;
  const graph = [];
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  while (temp > 0) {
    graph.push(input.shift().split(" ").map(Number));
    temp--;
  }

  let count = 0;
  const bfs = (x, y) => {
    //상하좌우 왼쪽위 오른쪽위 왼쪽아래 오른쪽아래
    const dx = [0, 0, -1, 1, -1, 1, -1, 1];
    const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
    const queue = [];
    queue.push([x, y]);
    visited[x][y];

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];
        if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
          if (graph[newX][newY] === 1 && visited[newX][newY] === false) {
            visited[newX][newY] = true;
            queue.push([newX, newY]);
          }
        }
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && visited[i][j] === false) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}