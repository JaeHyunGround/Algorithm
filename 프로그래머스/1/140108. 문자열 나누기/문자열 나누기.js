function solution(s) {
    let answer = 0;
    
    while(s.length > 0) {
        let startString = s[0]
        let count = 1;
        let pointIndex = -1;
        
        for (let i = 1; i < s.length; i++) {
            if (s[i] === startString) {
                count += 1;
            } else {
                count -= 1;
            }

            if (count === 0) {
                answer += 1;
                pointIndex = i;
                break;
            }
        }

        if (pointIndex === -1) {
            answer += 1
            break;
        } else {
            s = s.slice(pointIndex + 1)
        }
    }
    
    return answer;
}