function solution(n, k) {
    let answer = 0;
    let costDrink = k - Math.floor(n / 10)
    
    answer += 12000 * n + costDrink * 2000
    
    
    return answer;
}