from itertools import combinations
from collections import deque


N, M = map(int, input().split())
maps = [list(map(int, input().split())) for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
walls = 3

# 1. 벽 3개를 무작위로 세운다 (순열 조합)
# 2. 바이러스 퍼진 결과의 안전 영역 크기를 구한다
# 3. 모든 경우의 수를 구해보고 최대값을 뽑아낸다

empty = []
virus = []

for i in range(N):
    for j in range(M):
        if maps[i][j] == 0:
            empty.append((i, j))
        elif maps[i][j] == 2:
            virus.append((i, j))

def get_safe_area():
    copied = [row[:] for row in maps]
    q = deque()
    for x, y in virus:
        q.append((x, y))

    while q:
        x, y = q.popleft()
        for d in range(4):
            nx, ny = x + dx[d], y + dy[d]
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue

            if copied[nx][ny] == 0:
                copied[nx][ny] = 2
                q.append((nx, ny))

    return sum(row.count(0) for row in copied)

answer = 0
for walls in combinations(empty, 3):
    for x, y in walls:
        maps[x][y] = 1
    
    answer = max(answer, get_safe_area())

    for x, y in walls:
        maps[x][y] = 0

print(answer)