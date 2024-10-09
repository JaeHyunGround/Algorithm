function solution(order) {
    let result = 0;
    const stack = [];
    
    for (let i = 1; i <= order.length; i++) {
        stack.push(i)
        
        while(stack.length !== 0 && stack.at(-1) === order[result]) {
            stack.pop();
            result++;
        }
    }
    
    return result
}

// 스택을 사용하자