const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const objects = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

let answer = 0;
input.forEach((s) => {
  let sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (objects[sArr[i]] < objects[sArr[i + 1]]) {
      answer += objects[sArr.slice(i, i + 2).join("")];
      sArr.splice(i, 2, 0);
    } else {
      answer += objects[sArr[i]];
    }
  }
});

console.log(answer);
let stringResult = "";
while (answer > 0) {
  if (answer >= 1000) {
    stringResult += objects[1000];
    answer -= 1000;
  } else if (answer < 1000 && answer >= 900) {
    stringResult += objects[900];
    answer -= 900;
  } else if (answer < 900 && answer >= 500) {
    stringResult += objects[500];
    answer -= 500;
  } else if (answer < 500 && answer >= 400) {
    stringResult += objects[400];
    answer -= 400;
  } else if (answer < 400 && answer >= 100) {
    stringResult += objects[100];
    answer -= 100;
  } else if (answer < 100 && answer >= 90) {
    stringResult += objects[90];
    answer -= 90;
  } else if (answer < 90 && answer >= 50) {
    stringResult += objects[50];
    answer -= 50;
  } else if (answer < 50 && answer >= 40) {
    stringResult += objects[40];
    answer -= 40;
  } else if (answer < 40 && answer >= 10) {
    stringResult += objects[10];
    answer -= 10;
  } else if (answer < 10 && answer >= 9) {
    stringResult += objects[9];
    answer -= 9;
  } else if (answer < 9 && answer >= 5) {
    stringResult += objects[5];
    answer -= 5;
  } else if (answer < 5 && answer >= 4) {
    stringResult += objects[4];
    answer -= 4;
  } else if (answer < 4 && answer >= 1) {
    stringResult += objects[1];
    answer -= 1;
  }
}
console.log(stringResult);