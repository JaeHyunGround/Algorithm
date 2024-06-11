function solution(food) {
    let answer = [];
    
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 !== 0) {
            food[i] = food[i] - 1
        }
        for (let j = 0; j < food[i] / 2; j++) {
            answer.push(i)
        }
    }
    
    let copyAnswer = [...answer].reverse()
    
    return `${answer.join("")}0${copyAnswer.join("")}`;
}