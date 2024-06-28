const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(N, M) {
  const visited = new Array(N + 1); // 방문을 확인하기 위한 배열
  const output = []; // 하나하나 돌면서 경우를 확인 할 빈 배열
  let answer = ""; // 최종 정답

  function dfs(depth) {
    // 가지치기 조건
    // output의 길이 = depth가 조건 M을 만족한다면 최종 정답에 추가
    if (depth === M) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    // for문을 돌면서 재귀로 경우를 하나하나 파악
    for (let i = 1; i < N + 1; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i);
      dfs(depth + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  console.log(answer.trim());
}

solution(N, M);
// 백트래킹은 조합이나 수열을 구할 때 쓸 수 있다.