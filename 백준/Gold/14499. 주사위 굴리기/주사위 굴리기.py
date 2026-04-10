N, M, x, y, K = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
commands = list(map(int, input().split()))

# 주사위 표현을 어떻게 해야할까...
# 하드코딩 ㄱㄱ

dice = [0, 0, 0, 0, 0, 0, 0]

dx = [0, 0, 0, -1, 1]
dy = [0, 1, -1, 0, 0]

for cmd in commands:
    nx = x + dx[cmd]
    ny = y + dy[cmd]

    if nx < 0 or nx >= N or ny < 0 or ny >= M:
        continue

    x, y = nx, ny

    if cmd == 1:
        dice[1], dice[3], dice[4], dice[6] = dice[4], dice[1], dice[6], dice[3]
    elif cmd == 2:
        dice[1], dice[3], dice[4], dice[6] = dice[3], dice[6], dice[1], dice[4]
    elif cmd == 3:
        dice[1], dice[2], dice[5], dice[6] = dice[5], dice[1], dice[6], dice[2]
    elif cmd == 4:
        dice[1], dice[2], dice[5], dice[6] = dice[2], dice[6], dice[1], dice[5]

    if board[x][y] == 0:
        board[x][y] = dice[6]
    else:
        dice[6] = board[x][y]
        board[x][y] = 0

    print(dice[1])