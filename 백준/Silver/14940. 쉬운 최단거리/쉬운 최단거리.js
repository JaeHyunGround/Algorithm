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

const start = [];
const [n, m] = input.shift().split(" ").map(Number);
const map = Array.from({ length: n }, () => new Array(m).fill(0));
const countMap = Array.from({ length: n }, () => new Array(m).fill(-1));

for (let i = 0; i < input.length; i++) {
  const line = input[i].split(" ").map(Number);
  map[i] = line;
  if (line.indexOf(2) !== -1) start.push(i, line.indexOf(2), 0);
  for (let j = 0; j < line.length; j++) {
    if (line[j] === 0) countMap[i][j] = 0;
  }
}

const bfs = (start) => {
  const queue = new Queue();
  queue.enqueue(start);
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));
  const dc = [0, 0, 1, -1];
  const dr = [1, -1, 0, 0];

  while (queue.size() > 0) {
    const [currentC, currentR, count] = queue.dequeue();
    if (!visited[currentC][currentR]) {
      visited[currentC][currentR] = true;
      countMap[currentC][currentR] = count;

      for (let i = 0; i < 4; i++) {
        const nextC = currentC + dc[i];
        const nextR = currentR + dr[i];

        if (
          nextC < 0 ||
          nextR < 0 ||
          nextC >= n ||
          nextR >= m ||
          map[nextC][nextR] === 0
        )
          continue;

        queue.enqueue([nextC, nextR, count + 1]);
      }
    }
  }

  const answer = countMap.map((line) => line.join(" ")).join("\n");
  return answer;
};

console.log(bfs(start));