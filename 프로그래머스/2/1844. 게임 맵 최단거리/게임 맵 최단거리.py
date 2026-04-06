from collections import deque

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs(x, y, maps, cnt):
    maps[x][y] = 0
    queue = deque([(x, y, cnt)])
    while queue:
        cash = queue.popleft()
        if cash[0] == len(maps) - 1 and cash[1] == len(maps[0]) - 1:
            return cash[2]
        
        for i in range(4):
            nx = cash[0] + dx[i]
            ny = cash[1] + dy[i]
            if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]) and maps[nx][ny] == 1:
                maps[nx][ny] = 0
                queue.append((nx, ny, cash[2] + 1))
    
    return -1

def solution(maps):
    answer = bfs(0, 0, maps, 1)
    return answer