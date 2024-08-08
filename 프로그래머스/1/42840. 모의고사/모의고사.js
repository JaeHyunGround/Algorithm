function solution(answers) {
    const answer = [];
    const result = [];
    
    const arr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    arr.forEach((line) => {
        let count = 0
        for (let i = 0; i < answers.length; i++) {          
            if (answers[i] === line[i % line.length]) {
                count += 1;
            }
        }
        result.push(count)
    })
    
    let max = Math.max(...result)
    for (let i = 0; i < 3; i++) {
        if (max === result[i]) answer.push(i + 1)
    }
    
    return answer;
}