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

const N = +input.shift();
const map = Array.from({ length: N }, () => new Array(N).fill(0));
for (let i = 0; i < input.length; i++) {
  let line = input[i].split("").map(Number);
  map[i] = line;
}

const visited = Array.from({ length: N }, () => new Array(N).fill(false));
function bfs(start) {
  const queue = new Queue();
  queue.enqueue(start);
  let count = 1;
  visited[start[0]][start[1]] = true;
  const dc = [0, 0, 1, -1];
  const dr = [1, -1, 0, 0];

  while (queue.size() > 0) {
    const [currentC, currentR] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nextC = currentC + dc[i];
      const nextR = currentR + dr[i];

      if (
        nextC < 0 ||
        nextR < 0 ||
        nextC >= N ||
        nextR >= N ||
        visited[nextC][nextR]
      )
        continue;

      if (map[nextC][nextR] === 1) {
        queue.enqueue([nextC, nextR]);
        visited[nextC][nextR] = true;
        count += 1;
      }
    }
  }

  return count;
}

const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      answer.push(bfs([i, j]));
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));