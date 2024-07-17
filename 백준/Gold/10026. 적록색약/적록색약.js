const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];
const N = +input.shift();

const bfs = (start, word) => {
  const queue = [start];

  while (queue.length > 0) {
    const [curC, curR] = queue.shift();
    const dc = [1, -1, 0, 0];
    const dr = [0, 0, 1, -1];

    if (!visited[curC][curR]) {
      visited[curC][curR] = true;

      for (let i = 0; i < 4; i++) {
        const nextC = curC + dc[i];
        const nextR = curR + dr[i];

        if (
          nextC < 0 ||
          nextR < 0 ||
          nextC >= N ||
          nextR >= N ||
          map[nextC][nextR] !== word
        )
          continue;
        if (!visited[nextC][nextR] && map[nextC][nextR] === word) {
          queue.push([nextC, nextR]);
        }
      }
    }
  }
};

for (let i = 0; i < 2; i++) {
  let count = 0;

  if (i === 0) {
    var map = Array.from({ length: N }, () => []);
    var visited = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => false)
    );
    input.forEach((line, idx) => {
      const lines = line.split("");
      map[idx] = lines;
    });
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          bfs([i, j], map[i][j]);
          count += 1;
        }
      }
    }
  } else {
    var map = Array.from({ length: N }, () => []);
    var visited = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => false)
    );
    input.forEach((line, idx) => {
      const replaceLine = line.replace(/G/g, "R");
      const lines = replaceLine.split("");
      map[idx] = lines;
    });
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          bfs([i, j], map[i][j]);
          count += 1;
        }
      }
    }
  }

  answer.push(count);
}

console.log(answer.join(" "));