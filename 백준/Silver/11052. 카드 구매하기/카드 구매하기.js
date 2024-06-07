const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const cardCost = input[0].split(" ").map(Number);
cardCost.unshift(0);

const dp = new Array(N + 1);
dp[1] = cardCost[1];
dp[2] = Math.max(cardCost[1] + cardCost[1], cardCost[2]);

for (let i = 3; i <= N; i++) {
  let max = 0;
  for (let j = 1; j < i; j++) {
    if (max < cardCost[j] + dp[i - j]) {
      max = cardCost[j] + dp[i - j];
    }
  }
  dp[i] = Math.max(max, cardCost[i]);
}

console.log(dp[N]);