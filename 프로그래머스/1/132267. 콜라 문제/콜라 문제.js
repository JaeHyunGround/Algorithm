function solution(a, b, n) {
    let answer = 0
    
    while (n >= a) {
        let getCoke = Math.floor(n / a) * b
        n = n - (Math.floor(n / a) * a) + getCoke
        answer += getCoke
    }
    
    return answer;
}