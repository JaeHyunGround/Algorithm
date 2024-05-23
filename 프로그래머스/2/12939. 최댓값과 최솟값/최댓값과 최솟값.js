function solution(s) {
    let answer = [];
    let input = s.split(" ").map(Number)
    
    answer.push(input.reduce((a, b) => Math.min(a, b)), input.reduce((a, b) => Math.max(a, b))) 
    
    return answer.join(" ");
}