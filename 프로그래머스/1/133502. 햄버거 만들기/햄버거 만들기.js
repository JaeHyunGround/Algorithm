function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    // 음수 slice는 뒤에서 부터 제거
    if (stack.slice(-4).join('') == '1231') {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}