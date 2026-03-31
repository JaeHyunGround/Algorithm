function solution(n) {
    const answer = n.toString().split('').map(Number).reduce((acc, cur) => acc + cur)
    return answer;
}