function solution(N, road, K) {
    const graph = Array.from({length: N + 1}, () => [])
    const distance = Array(N + 1).fill(Infinity)
    const queue = [[1, 0]];
    
    for (const [a, b, c] of road) {
        graph[a].push([b, c]) // b = to c = cost
        graph[b].push([a, c])
    }
    
    distance[1] = 0
    
    while (queue.length) {
        const [point, cost] = queue.shift();
        for (let i = 0; i < graph[point].length; i++) {
            const next = graph[point][i][0]
            const nextcost = graph[point][i][1]
            
            if (distance[next] > cost + nextcost) {
                distance[next] = cost + nextcost
                queue.push([next, cost + nextcost])
            }
        }
    }
    
    const answer = distance.filter((v) => v <= K).length
    return answer
}

// 다익스트라 => 우선순위 큐로 풀기 => 최단경로 (비비큐)