function solution(answers) {
    let answer = [];
    
    const info = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    const answerCounter = Array.from({length: 3}, () => 0)
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (answers[j] === info[i][j % info[i].length]) answerCounter[i] += 1
        }
    }
    
    const max = Math.max(...answerCounter)
    answerCounter.forEach((num, index) => {
        if (num === max) answer.push(index + 1)
    })
    
    return answer;
}