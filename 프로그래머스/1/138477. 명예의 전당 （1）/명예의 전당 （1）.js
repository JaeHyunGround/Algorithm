function solution(k, score) {
    const answer = [];
    const arr = [];
    
    for (let i = 1; i <= score.length; i++) {
        if (i <= k) {
            arr.push(score[i - 1])
            answer.push(Math.min(...arr))
        } else {
            arr.push(score[i - 1])
            let minIndex = arr.indexOf(Math.min(...arr))
            arr.splice(minIndex, 1)
            answer.push(Math.min(...arr))
        }
    }
    
    return answer;
}