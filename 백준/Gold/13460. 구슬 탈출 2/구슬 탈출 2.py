from collections import deque

# 1. 입력 파싱
N, M = map(int, input().split())
board = []
for i in range(N):
    row = list(input().strip())
    for j in range(M):
        if row[j] == 'R':
            rr, rc = i, j
            row[j] = '.'
        elif row[j] == 'B':
            br, bc = i, j
            row[j] = '.'
    board.append(row)

# 2. 구슬 이동 함수
def move(r, c, dr, dc):
    count = 0
    while board[r + dr][c + dc] != '#' and board[r][c] != 'O':
        r += dr
        c += dc
        count += 1
    return r, c, count

# 3. BFS
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

queue = deque()
queue.append((rr, rc, br, bc, 0))
visited = set()
visited.add((rr, rc, br, bc))

answer = -1

while queue:
    cr, cc, cb, cbc, cnt = queue.popleft()

    if cnt >= 10:
        continue

    for d in range(4):
        nrr, nrc, r_count = move(cr, cc, dx[d], dy[d])
        nbr, nbc, b_count = move(cb, cbc, dx[d], dy[d])

        # 파란 구슬이 구멍 → 스킵
        if board[nbr][nbc] == 'O':
            continue

        # 빨간 구슬이 구멍 → 정답
        if board[nrr][nrc] == 'O':
            answer = cnt + 1
            queue.clear()
            break

        # 같은 위치면 더 많이 움직인 쪽을 한 칸 뒤로
        if nrr == nbr and nrc == nbc:
            if r_count > b_count:
                nrr -= dx[d]
                nrc -= dy[d]
            else:
                nbr -= dx[d]
                nbc -= dy[d]

        state = (nrr, nrc, nbr, nbc)
        if state not in visited:
            visited.add(state)
            queue.append((nrr, nrc, nbr, nbc, cnt + 1))

print(answer)