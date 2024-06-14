const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

const [M, N] = input.shift().split(" ").map(Number);
const tomato = Array.from({ length: N }, () => []);
const startPoint = [];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, 0])
);

for (let i = 0; i < input.length; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < line.length; j++) {
    if (line[j] === 1) {
      startPoint.push([i, j, 0]);
    } else if (line[j] === -1) {
      visited[i][j] = [-1, 0];
    }
    tomato[i][j] = line[j];
  }
}

function bfs(start) {
  const queue = new Queue();
  for (let i = 0; i < start.length; i++) {
    queue.enqueue(start[i]);
  }

  const dc = [0, 0, 1, -1];
  const dr = [1, -1, 0, 0];

  while (queue.size() > 0) {
    const [currentC, currentR, currentCount] = queue.dequeue();
    if (visited[currentC][currentR][0] === false) {
      visited[currentC][currentR] = [true, currentCount];

      for (let i = 0; i < 4; i++) {
        const nextC = currentC + dc[i];
        const nextR = currentR + dr[i];

        if (
          nextC < 0 ||
          nextR < 0 ||
          nextC >= N ||
          nextR >= M ||
          tomato[nextC][nextR] === -1 ||
          visited[nextC][nextR][0] === true
        ) {
          continue;
        }

        queue.enqueue([nextC, nextR, currentCount + 1]);
      }
    }
  }

  let max = 0;
  for (let i = 0; i < visited.length; i++) {
    let line = visited[i];
    for (let j = 0; j < line.length; j++) {
      if (line[j][0] === false) {
        return -1;
      }
      max = Math.max(max, line[j][1]);
    }
  }

  return max;
}

console.log(bfs(startPoint));