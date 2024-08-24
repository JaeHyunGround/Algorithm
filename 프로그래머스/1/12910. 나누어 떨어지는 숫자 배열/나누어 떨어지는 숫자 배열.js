function solution(arr, divisor) {
    const answer = [];
    
    for (const num of arr) {
        if (num % divisor === 0) answer.push(num)
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}