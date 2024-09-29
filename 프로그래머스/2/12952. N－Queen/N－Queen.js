function solution(n) {
    let answer = 0;
    let queen = Array.from({length: n}, () => 0)
    
    for (let i = 0; i < n; i++) {
        queen[0] = i
        dfs(1)
    }
    
    function dfs(row) {
        if (row === n) answer += 1
        
        for (let col = 0; col < n; col++) {
            queen[row] = col
            let checker = true
            
            for (let i = 0; i < row; i++) {
                if (queen[row] === queen[i]) {
                    checker = false
                    break;
                }
                if (Math.abs(queen[row] - queen[i]) === Math.abs(row - i)) {
                    checker = false
                    break;
                }
            }
            if (checker) dfs(row + 1)
        }
    }
    
    return answer;
}