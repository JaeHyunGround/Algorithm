function solution(numbers, target) {
    let answer = 0;
    let length = numbers.length
    
    function dfs(sum, idx) {
        if (idx === length - 1) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        
        dfs(sum + numbers[idx + 1], idx + 1)
        dfs(sum - numbers[idx + 1], idx + 1)
    }
    
    dfs(numbers[0], 0)
    dfs(-numbers[0], 0)
    
    return answer;
}