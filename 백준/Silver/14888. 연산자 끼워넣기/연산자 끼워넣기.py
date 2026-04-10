# 중복 가능 순열
from itertools import permutations
# 중복 X 순열 => combinations

N = int(input())
arr = list(map(int, input().split()))
n_arr = list(map(int, input().split()))

# ---

# 0 = +
# 1 = -
# 2 = *
# 3 = %

def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    if a < 0:
        result = abs(a) // b
        return -result
    else:
        return a // b

result_arr = []
n_clear_arr = []

for i in range(4):
    for _ in range(n_arr[i]):
        n_clear_arr.append(i)

permutation = list(set(permutations(n_clear_arr, len(n_clear_arr))))

for i in range(len(permutation)):
    result = arr[0]
    methods = list(permutation[i])
    for j in range(0, len(methods)):
        if methods[j] == 0:
            result = add(result, arr[j + 1])
        elif methods[j] == 1:
            result = sub(result, arr[j + 1])
        elif methods[j] == 2:
            result = mul(result, arr[j + 1])
        elif methods[j] == 3:
            result = div(result, arr[j + 1])
    result_arr.append(result)

print(max(result_arr))
print(min(result_arr))