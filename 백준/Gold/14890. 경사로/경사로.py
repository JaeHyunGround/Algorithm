N, L = map(int, input().split())
maps = [list(map(int, input().split())) for _ in range(N)]

def count(line):
    used = [False] * N

    for i in range(N - 1):
        diff = line[i + 1] - line[i]

        if diff == -1:
            for j in range(L):
                if i + 1 + j >= N or line[i + 1 + j] != line[i + 1] or used[i + 1 + j]:
                    return False
                used[i + 1 + j] = True
        elif diff == 1:
            for j in range(L):
                if i - j < 0 or line[i - j] != line[i] or used[i - j]:
                    return False
                used[i - j] = True
        elif diff == 0:
            continue
        else:
            return False
    
    return True

answer = 0
for i in range(N):
    if count(maps[i]):
        answer += 1

for j in range(N):
    col = [maps[i][j] for i in range(N)]
    if count(col):
        answer += 1

print(answer)