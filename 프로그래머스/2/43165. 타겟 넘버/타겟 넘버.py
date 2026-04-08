answer = 0

def dfs(numbers, target, cur, idx):
    global answer
    if idx == len(numbers):
        if cur == target:
            answer += 1
        return;
    
    dfs(numbers, target, cur + numbers[idx], idx + 1)
    dfs(numbers, target, cur - numbers[idx], idx + 1)

def solution(numbers, target):
    dfs(numbers, target, 0, 0)
    return answer