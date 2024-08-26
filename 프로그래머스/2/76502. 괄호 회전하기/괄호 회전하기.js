function solution(s) {
    const target = s.split("")
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        const stack = []
        let flag = true;
        
        for (const s of target) {
            if (s === '[' || s === '{' || s === '(') {
                stack.push(s)
            } else {
                if (stack.length === 0) {
                    flag = false;
                    break;
                }
            }
            
            if (s === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                }
            } else if (s === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                }
            } else if (s === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                }
            }
        }
        
        if (stack.length === 0 && flag) answer += 1
        let temp = target.shift();
        target.push(temp)
    }
    
    return answer;
}