function solution(cards1, cards2, goal) {
    let answer = "Yes";
    
    for (const word of goal) {
        if (cards1[0] === word || cards2[0] === word) {
            if (cards1[0] === word) {
                cards1.shift();
            } else {
                cards2.shift();
            }
        } else {
            answer = "No"
            return answer
        }
    }
    
    return answer;
}