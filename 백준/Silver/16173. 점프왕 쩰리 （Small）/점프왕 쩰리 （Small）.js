const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const width = +input.shift();
const map = input.map((line) => line.split(" ").map(Number));

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

function bfs(map, width) {
  const queue = new Queue();
  let answer = "Hing";

  const dr = [1, 0]; // 오른쪽
  const dc = [0, 1]; // 아래

  const visitedNode = Array.from({ length: width }, () =>
    new Array(width).fill(false)
  );

  queue.enqueue([0, 0]);

  while (queue.size() > 0) {
    const [currentR, currentC] = queue.dequeue();
    visitedNode[currentR][currentC] = true;
    const currentDist = map[currentR][currentC];

    if (currentDist === -1) {
      answer = "HaruHaru";
      break;
    }

    for (let i = 0; i < 2; i++) {
      const nextR = currentR + dr[i] * currentDist;
      const nextC = currentC + dc[i] * currentDist;

      if (
        nextR >= width ||
        nextC >= width ||
        visitedNode[nextR][nextC] === true
      ) {
        continue;
      }

      queue.enqueue([nextR, nextC]);
    }
  }
  console.log(answer);
}

bfs(map, width);
