function solution(numbers) {
    const answer = [];
    
    numbers.forEach((num, index) => {
        for (let i = index + 1; i < numbers.length; i++) {
            answer.push(num + numbers[i])
        }
    })
    
    const newAnswer = [...new Set(answer)]
    newAnswer.sort((a, b) => a - b)
    
    return newAnswer;
}