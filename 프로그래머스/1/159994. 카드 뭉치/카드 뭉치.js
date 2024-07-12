function solution(cards1, cards2, goal) {
    let answer = "Yes";
    
    for (let i = 0; i < goal.length; i++) {
        if (cards1.indexOf(goal[i]) !== -1 && cards2.indexOf(goal[i]) !== -1) {
            answer = "No"
            break;
        } else {
            if (cards1.indexOf(goal[i]) !== 0 && cards2.indexOf(goal[i]) !== 0) {
                answer = "No"
                break;
            } else {
                if (cards1.indexOf(goal[i]) === 0) {
                    cards1.splice(0, 1)
                } else {
                    cards2.splice(0, 1)
                }
            }
        }
    }
    
    return answer;
}