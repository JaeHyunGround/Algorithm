const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

// 점화식 = dp[i] = dp[i - 1] + dp[i - 2] + d[i - 2]

const dp = new Array(input + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[input]);