const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = +input.shift();
const answer = [];

while (input.length > 0) {
  let myMap = new Map();
  let n = +input.shift();
  let testCase = input.splice(0, n);

  for (let i = 0; i < n; i++) {
    let [name, type] = testCase[i].split(" ");
    if (!myMap.get(type)) {
      myMap.set(type, 1);
    } else {
      myMap.set(type, myMap.get(type) + 1);
    }
  }

  answer.push([...myMap.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1);
}

console.log(answer.join("\n"));