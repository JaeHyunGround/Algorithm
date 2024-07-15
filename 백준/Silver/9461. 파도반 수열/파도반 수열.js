const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const T = input.shift();

input.forEach((num) => {
  const dp = new Array(num + 1);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;

  let count = 1;
  for (let i = 6; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[count];
    count += 1;
  }

  console.log(dp[num]);
});