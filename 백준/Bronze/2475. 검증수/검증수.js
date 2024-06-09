const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10);