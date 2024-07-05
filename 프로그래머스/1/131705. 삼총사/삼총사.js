function solution(number) {
    const visited = new Array(number.length).fill(false)
    const output = [];
    let answer = 0
    
    const dfs = (sum, depth, idx) => {
        if (depth === 3 && sum === 0) {
            answer += 1;
            return;
        }
        
        for (let i = idx; i < number.length; i++) {
            if (visited[i]) continue;
            visited[i] = true
            output.push(number[i])
            dfs(output.reduce((acc, cur) => acc + cur, 0), depth + 1, i)
            output.pop();
            visited[i] = false
        }
    }
    dfs(-1, 0, 0)
    return answer
}