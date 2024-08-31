function solution(s) {
    const input = s.split(" ")
    const stack = []
    
    for (const c of input) {
        if (c === 'Z') {
            stack.pop()
        } else {
            stack.push(Number(c))
        }
    }
    
    return stack.reduce((acc, cur) => acc + cur, 0)
}