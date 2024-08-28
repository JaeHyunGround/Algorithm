function solution(prices) {
    const n = prices.length
    const answer = new Array(n).fill(0)
    
    const stack = [0] // 인덱스를 담아두는 스택
    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        
        stack.push(i)
    }
    
    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = n - 1 - j
    }
    
    return answer
}