function solution(s) {
    let stack = [];
    
    for (const word of s) {
        if (stack.length === 0) {
            stack.push(word)
        }
        else {
            if (stack[stack.length - 1] === word) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }
    
    return stack.length ? 0 : 1
}