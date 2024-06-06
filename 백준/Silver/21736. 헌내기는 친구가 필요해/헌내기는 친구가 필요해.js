const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [c, r] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(""));
let doyeon = [];

for (let i = 0; i < c; i++) {
  if (map[i].indexOf("I") !== -1) doyeon = [i, map[i].indexOf("I")];
}

function dfs(start) {
  let answer = 0;
  const stack = [start];
  const visited = Array.from({ length: c }, () => new Array(r).fill(false));

  const dc = [0, 0, 1, -1];
  const dr = [1, -1, 0, 0];

  while (stack.length > 0) {
    const [currentC, currentR] = stack.pop();

    if (!visited[currentC][currentR]) {
      visited[currentC][currentR] = true;

      if (map[currentC][currentR] === "P") {
        answer += 1;
      }

      for (let i = 0; i < 4; i++) {
        const nextC = currentC + dc[i];
        const nextR = currentR + dr[i];

        if (
          nextC < 0 ||
          nextR < 0 ||
          nextC >= c ||
          nextR >= r ||
          map[nextC][nextR] === "X"
        ) {
          continue;
        }
        stack.push([nextC, nextR]);
      }
    }
  }

  return answer === 0 ? "TT" : answer;
}

console.log(dfs(doyeon));
