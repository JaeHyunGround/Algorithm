const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let blue = 0;
let white = 0;

const map = Array.from({ length: N }, () => []);
input.forEach((lines, index) => {
  map[index] = lines.split(" ").map(Number);
});

function solution(map, N) {
  const isFillSameColor = (x, y, n) => {
    const base = map[x][y];

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (base !== map[i][j]) {
          return false;
        }
      }
    }

    return true;
  };

  const divider = (x, y, n) => {
    if (isFillSameColor(x, y, n)) {
      if (map[x][y] === 1) blue += 1;
      else white += 1;

      return;
    }

    let half = n / 2;

    divider(x, y, half);
    divider(x + half, y, half);
    divider(x, y + half, half);
    divider(x + half, y + half, half);
  };

  divider(0, 0, N);

  return `${white}\n${blue}`;
}

console.log(solution(map, N));