function solution(k, m, score) {
    if (score.length < m) {
        return 0;
    }
    
    let answer = 0;
    score.sort((a, b) => a - b)
    
    while (score.length >= m) {
        let scoreArr = score.splice(score.length - m, m)
        answer += m * Math.min(...scoreArr)
    }
    
    return answer;
}