const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const switchCount = +input.shift();
const switchState = input.shift().split(" ").map(Number);
const students = +input.shift();

// 1이면 남자, 2이면 여자
// 남자는 자신이 받은 수의 배수에 해당되는 스위치 상태를 바꿈
// 여자는 자신이 받은 번호를 기준으로 좌우가 대칭이면서 가장 많은 구간의 스위치를 바꿈

input.forEach((line) => {
  const [G, N] = line.split(" ").map(Number);
  if (G === 1) {
    let count = 1;
    while (N * count <= switchCount) {
      switchState[N * count - 1] === 1
        ? (switchState[N * count - 1] = 0)
        : (switchState[N * count - 1] = 1);
      count++;
    }
  } else {
    let count = 1;
    let changeArrayIndex = [N - 1];
    while (N - count >= 0 || N + count <= switchCount) {
      if (switchState[N - count - 1] !== switchState[N + count - 1]) {
        break;
      } else {
        changeArrayIndex.push(N - count - 1, N + count - 1);
      }
      count++;
    }
    for (let i = 0; i < changeArrayIndex.length; i++) {
      switchState[changeArrayIndex[i]] === 1
        ? (switchState[changeArrayIndex[i]] = 0)
        : (switchState[changeArrayIndex[i]] = 1);
    }
  }
});

if (switchState.length < 20) {
  console.log(switchState.join(" "));
} else {
  const answer = [];
  for (let i = 0; i < switchState.length; i += 20) {
    answer.push(switchState.slice(i, i + 20));
  }
  answer.map((line) => console.log(line.join(" ")));
}
