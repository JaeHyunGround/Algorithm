function solution(array, commands) {
    const answer = []
    
    commands.forEach((cases) => {
        const [i, j, k] = cases
        const result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
        answer.push(result)
    })
    
    return answer;
}