function solution(answers) {
    const answer = [];
    const result = [0, 0, 0];
    
    const arr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    arr.forEach((line, index) => {
        let score = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === line[i % line.length]) result[index] += 1 
        }
    })
    
    let max = Math.max(...result)
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === max) answer.push(i + 1)
    }
    
    
    return answer;
}