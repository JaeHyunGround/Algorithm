const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = +input.shift();

while (input.length > 0) {
  let cases = input.shift().split("");
  let currentDirection = "N";
  let map = [];
  let x = 0;
  let y = 0;

  cases.forEach((d) => {
    switch (d) {
      case "F":
        if (currentDirection === "N") {
          x++;
          map.push([x, y]);
        } else if (currentDirection === "S") {
          x--;
          map.push([x, y]);
        } else if (currentDirection === "E") {
          y++;
          map.push([x, y]);
        } else if (currentDirection === "W") {
          y--;
          map.push([x, y]);
        }
        break;
      case "B":
        if (currentDirection === "N") {
          x--;
          map.push([x, y]);
        } else if (currentDirection === "S") {
          x++;
          map.push([x, y]);
        } else if (currentDirection === "E") {
          y--;
          map.push([x, y]);
        } else if (currentDirection === "W") {
          y++;
          map.push([x, y]);
        }
        break;
      case "L":
        if (currentDirection === "N") {
          currentDirection = "W";
        } else if (currentDirection === "W") {
          currentDirection = "S";
        } else if (currentDirection === "S") {
          currentDirection = "E";
        } else if (currentDirection === "E") {
          currentDirection = "N";
        }
        break;
      case "R":
        if (currentDirection === "N") {
          currentDirection = "E";
        } else if (currentDirection === "E") {
          currentDirection = "S";
        } else if (currentDirection === "S") {
          currentDirection = "W";
        } else if (currentDirection === "W") {
          currentDirection = "N";
        }
        break;
    }
  });

  let maxX = 0;
  let maxY = 0;
  let minX = 0;
  let minY = 0;

  map.forEach(([x, y]) => {
    if (maxX < x) maxX = x;
    if (maxY < y) maxY = y;
    if (minX > x) minX = x;
    if (minY > y) minY = y;
  });

  console.log((maxX - minX) * (maxY - minY));
}