import math

def solution(triangle):
    dp = [[] for _ in range(len(triangle))]
    for i in range(len(triangle)):
        dp[i] = [0] * len(triangle[i])
        
    dp[0][0] = triangle[0][0]
    dp[1][0] = dp[0][0] + triangle[1][0]
    dp[1][1] = dp[0][0] + triangle[1][1]
#     dp[2][0] = dp[1][0] + triangle[2][0]
#     dp[2][1] = max(dp[1][0] + triangle[2][1], dp[1][1] + triangle[2][1])
#     dp[2][2] = dp[1][1] + triangle[2][2]
    
#     dp[3][0] = dp[2][0] + triangle[3][0]
#     dp[3][3] = dp[2][2] + triangle[3][3]
    for j in range(2, len(triangle)):
        for k in range(0, len(triangle[j])):
            if k == 0:
                dp[j][k] = dp[j - 1][k] + triangle[j][k]
            elif k == len(triangle[j]) - 1:
                dp[j][k] = dp[j - 1][k - 1] + triangle[j][k]
            else:
                dp[j][k] = max(dp[j - 1][k - 1] + triangle[j][k], dp[j - 1][k] + triangle[j][k])
    
    return max(dp[len(triangle) - 1])