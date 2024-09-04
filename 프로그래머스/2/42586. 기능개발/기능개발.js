function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        if (progresses[0] >= 100) {
            let countArr = [];
            while (progresses[0] >= 100) {
                countArr.push(progresses.shift())
                speeds.shift();
            }
            answer.push(countArr.length)
        }
        
        for (let j = 0; j < progresses.length; j++) {
            progresses[j] = progresses[j] + speeds[j]
        }
    }
    
    return answer;
}