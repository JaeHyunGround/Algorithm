function dfs(computers, visited, node) {
    visited[node] = true;
    for (let i = 0; i < computers[node].length; i++) {
        if (computers[node][i] && !visited[i]) {
            dfs(computers, visited, i)
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({length: n}, () => false)
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(computers, visited, i)
            answer += 1;
        }
    }
    
    return answer;
}