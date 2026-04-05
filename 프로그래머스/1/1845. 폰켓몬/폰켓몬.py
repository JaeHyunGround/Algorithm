def solution(nums):
    target = len(nums) / 2
    arr = list(set(nums))
    
    answer = 0
    if len(arr) >= target:
        answer = target
    else:
        answer = len(arr)
        
    return answer
    