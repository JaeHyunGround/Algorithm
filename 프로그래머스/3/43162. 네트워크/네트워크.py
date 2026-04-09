def dfs(computers, visited, idx):
    visited[idx] = True
    
    for i in range(len(computers[idx])):
        if i == idx:
            continue
        
        if not visited[i] and computers[idx][i] == 1:
            dfs(computers, visited, i)
    

def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    for i in range(n):
        if not visited[i]:
            dfs(computers, visited, i)
            answer += 1
    
    return answer