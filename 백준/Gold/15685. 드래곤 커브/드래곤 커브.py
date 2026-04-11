from collections import deque

# 방향: 0→, 1↑, 2←, 3↓
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

grid = [[0] * 101 for _ in range(101)]

N = int(input())
for _ in range(N):
    x, y, d, g = map(int, input().split())

    # 1. 방향 리스트 만들기
    dirs = [d]
    for _ in range(g):
        new = [(dir + 1) % 4 for dir in reversed(dirs)]
        dirs = dirs + new

    # 2. 방향 따라 점 찍기
    grid[x][y] = 1
    cx, cy = x, y
    for dir in dirs:
        cx += dx[dir]
        cy += dy[dir]
        grid[cx][cy] = 1

# 3. 1x1 정사각형 세기
count = 0
for x in range(100):
    for y in range(100):
        if grid[x][y] and grid[x+1][y] and grid[x][y+1] and grid[x+1][y+1]:
            count += 1

print(count)