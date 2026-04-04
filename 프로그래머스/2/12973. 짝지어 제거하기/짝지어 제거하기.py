def solution(s):
    arr = []
    
    for i in s:
        if len(arr) == 0:
            arr.append(i)
        else:
            if arr[len(arr) - 1] != i:
                arr.append(i)
            else:
                arr.pop()
                
    answer = 0
    if len(arr) == 0:
        answer = 1
    
    return answer