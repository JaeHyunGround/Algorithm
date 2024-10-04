function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 모든 숫자를 다 처리했을 때
    if (index === numbers.length) {
      // 타겟 넘버와 일치하면 경우의 수 증가
      if (sum === target) {
        answer++;
      }
      return;
    }

    // 현재 index의 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 현재 index의 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }

  // 탐색 시작
  dfs(0, 0);

  return answer;
}