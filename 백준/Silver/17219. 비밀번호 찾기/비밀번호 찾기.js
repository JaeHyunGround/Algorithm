const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const myMap = new Map();
const emailPasswords = input.splice(0, N);

emailPasswords.forEach((line) => {
  const [email, password] = line.split(" ");
  myMap.set(email, password);
});

input.forEach((line) => {
  console.log(myMap.get(line));
});