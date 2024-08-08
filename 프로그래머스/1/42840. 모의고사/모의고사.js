function solution(answers) {
    const answer = [];
    const result = [];
    
    const arr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    arr.forEach((line) => {
        let count = 0
        let idx = 0;
        for (let i = 0; i < answers.length; i++) {
            if (idx >= line.length) idx = 0;
            
            if (answers[i] === line[idx]) {
                count += 1;
            }
            idx++;
        }
        result.push(count)
    })
    
    let max = Math.max(...result)
    for (let i = 0; i < 3; i++) {
        if (max === result[i]) answer.push(i + 1)
    }
    
    return answer;
}