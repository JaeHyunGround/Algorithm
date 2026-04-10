from itertools import combinations

N = int(input())
S = [[] for _ in range(N)]

for i in range(N):    
    S[i] = list(map(int, input().split()))

min = 1e9

# ---

for combination in combinations(list(range(N)), N // 2):
    team_a = combination
    team_b = []
    for i in range(N):
        if i not in team_a:
            team_b.append(i)

    power_a = 0
    power_b = 0

    for x in team_a:
        for y in team_a:
            power_a += S[x][y]

    for x in team_b:
        for y in team_b:
            power_b += S[x][y]

    diff = abs(power_a - power_b)

    if min > diff:
        min = diff


print(min)