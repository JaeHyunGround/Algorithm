const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let reverseInput = input.split("").reverse().join("");

if (input === reverseInput) {
  console.log(reverseInput.length);
  return;
}

for (let i = 1; i < input.length; i++) {
  let strings = input.split("").slice(i).join("");
  let reverseStrings = input.split("").slice(i).reverse().join("");
  if (strings === reverseStrings) {
    console.log(input.length + i);
    break;
  }
}