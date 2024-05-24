const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

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
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function bfs(start, count, target) {
  const queue = new Queue();
  const visited = new Array(100001).fill(false);
  queue.enqueue([start, count]);

  while (queue.size()) {
    let [currentNumber, currentCount] = queue.dequeue();

    if (!visited[currentNumber]) {
      visited[currentNumber] = true;
      if (currentNumber === target) {
        return currentCount;
      } else {
        if (currentNumber + 1 <= 100000)
          queue.enqueue([currentNumber + 1, currentCount + 1]);
        if (currentNumber - 1 <= 100000)
          queue.enqueue([currentNumber - 1, currentCount + 1]);
        if (currentNumber * 2 <= 100000)
          queue.enqueue([currentNumber * 2, currentCount + 1]);
      }
    }
  }
}

console.log(bfs(N, 0, M));