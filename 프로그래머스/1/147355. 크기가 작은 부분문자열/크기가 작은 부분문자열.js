function solution(t, p) {
    let answer = 0;
    let tLength = t.length;
    let pLength = p.length;
    
    for(let i = 0; i <= tLength - pLength; i++) {
        let cases = +t.slice(i, i + pLength)
        
        if (cases <= +p) answer += 1;
    }
    
    return answer;
}