function solution(land) {
    const N = land[0].length;
    const dp = Array.from({length: land.length}, () => new Array(N).fill(0))
    dp[0] = land[0]
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < N; j++) {
            if (j === 0) {
                let targetArr = dp[i - 1].slice(j + 1)
                dp[i][j] = land[i][j] + Math.max(...targetArr)
            } else if (j === N - 1) {
                let targetArr = dp[i - 1].slice(0, N - 1)
                dp[i][j] = land[i][j] + Math.max(...targetArr)
            } else {
                let targetArr = [...dp[i - 1]]
                targetArr[j] = -1
                dp[i][j] = land[i][j] + Math.max(...targetArr)
            }
        } 
    }
    
    return Math.max(...dp[dp.length - 1])
}