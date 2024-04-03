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

  const dx = [1, 0];
  const dy = [0, 1];

  const visitedNode = Array.from({ length: width }, () =>
    new Array(width).fill(false)
  );

  queue.enqueue([0, 0]);

  while (queue.size() > 0) {
    const [currentX, currentY] = queue.dequeue();
    visitedNode[currentX][currentY] = true;
    const currentDist = map[currentX][currentY]; // dist = 거리

    if (currentDist === -1) {
      answer = "HaruHaru";
      break;
    }

    for (let i = 0; i < 2; i++) {
      const nextX = currentX + dx[i] * currentDist;
      const nextY = currentY + dy[i] * currentDist;

      if (
        nextX >= width ||
        nextY >= width ||
        visitedNode[nextX][nextY] === true
      ) {
        continue;
      }

      queue.enqueue([nextX, nextY]);
    }
  }
  console.log(answer);
}

bfs(map, width);