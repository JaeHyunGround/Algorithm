function solution(s) {
    const answer = [];
    let input = s.split("")
    const myMap = new Map();
    
    for (let i = 0; i < input.length; i++) {
        let word = input[i]
        
        if (!myMap.has(word)) {
            answer.push(-1)
        } else {
            answer.push(i - myMap.get(input[i]))
        }
        myMap.set(word, i)
    }
    
    return answer;
}