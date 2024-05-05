function solution(array, commands) {
    const answer = [];
    
    commands.forEach((cases) => {
        const [i, j, k] = cases
        let newArray = array.slice(i - 1, j).map(Number).sort((a, b) => a - b)
        
        answer.push(newArray[k - 1])
    })
    
    return answer;
}