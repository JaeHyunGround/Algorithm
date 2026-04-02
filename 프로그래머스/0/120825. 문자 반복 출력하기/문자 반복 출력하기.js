function solution(my_string, n) {
    const answer = my_string.split("").map(word => word.repeat(n))
    return answer.join('')
}