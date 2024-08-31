function solution(arr) {
    const answer = [];

    for (const num of arr) {
        if (answer.length > 0 && num === answer[answer.length - 1]) {
            continue;
        } else {
            answer.push(num)
        }
    }
    
    return answer;
}