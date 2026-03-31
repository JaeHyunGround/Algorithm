function solution(n) {
    const answer = String(n).split('').map(Number).reduce((acc, cur) => acc + cur)
    return answer;
}