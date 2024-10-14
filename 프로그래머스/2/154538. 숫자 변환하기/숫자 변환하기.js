function solution(x, y, n) {
    const dp = Array.from({length: y + 1}, () => -1)
    dp[x] = 0
    
    for (let i = x; i <= y; i++) {
        if (dp[i] === -1) continue;
        
        if (i + n <= y) {
            if (dp[i + n] === -1) {
                dp[i + n] = dp[i] + 1
            } else {
                dp[i + n] = Math.min(dp[i] + 1, dp[i + n])
            }
        }
        
        if (i * 2 <= y) {
            if (dp[i * 2] === -1) {
                dp[i * 2] = dp[i] + 1
            } else {
                dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2])
            }
        }
        
        if (i * 3 <= y) {
            if (dp[i * 3] === -1) {
                dp[i * 3] = dp[i] + 1
            } else {
                dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3])
            }
        }
    }
    
    return dp[y]
}

// dfs, bfs 실패시 dp로 접근해보자.