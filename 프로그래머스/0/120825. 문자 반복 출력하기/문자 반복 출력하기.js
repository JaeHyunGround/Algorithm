function solution(my_string, n) {
    const answer = []
    my_string.split("").forEach(word => {
        for (let i = 0; i < n; i++) {
            answer.push(word)
        }
    })
    
    return answer.join("");
}