function solution(s) {
    const answer = false;
    const stack = [];
    
    for (const c of s) {
        if (stack.length === 0 && c === ')') {
            return false
            break;
        } else {
            if (c === '(') {
                stack.push(c)
            } else {
                stack.pop()
            }
        }
    }

    return stack.length ? false : true
}