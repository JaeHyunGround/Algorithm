function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => [])
    for (const [a, b] of edge) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    function bfs(start) {
        let max = -1
        const queue = [start];
        const visited = Array.from({length: n + 1}, () => [false, -1])
        
        while (queue.length) {
            const [cur, dis] = queue.shift();
            
            if (!visited[cur][0]) {
                visited[cur] = [true, dis];
                max = max < dis ? dis : max
                
                for (let i = 0; i < graph[cur].length; i++) {
                    queue.push([graph[cur][i], dis + 1])
                }
            }
        }
        
        return [visited, max]
    }
    
    const [result, max] = bfs([1, 0])
    const answer = result.filter((item) => item[1] === max)
    
    return answer.length
}