N, L = map(int, input().split())
maps = [list(map(int, input().split())) for _ in range(N)]

def check(line):
    used = [False] * N

    for i in range(N - 1):
        diff = line[i + 1] - line[i]

        if diff == 0:
            continue
        elif diff == -1:  # 낮아짐 → 오른쪽에 경사로
            for j in range(L):
                if i + 1 + j >= N or line[i + 1 + j] != line[i + 1] or used[i + 1 + j]:
                    return False
                used[i + 1 + j] = True
        elif diff == 1:   # 높아짐 → 왼쪽에 경사로
            for j in range(L):
                if i - j < 0 or line[i - j] != line[i] or used[i - j]:
                    return False
                used[i - j] = True
        else:             # 차이 2 이상
            return False

    return True

count = 0

# 행 검사
for i in range(N):
    if check(maps[i]):
        count += 1

# 열 검사
for j in range(N):
    col = [maps[i][j] for i in range(N)]
    if check(col):
        count += 1

print(count)