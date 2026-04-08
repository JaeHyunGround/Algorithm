def solution(n, w, num):
    arr = [[] for _ in range((n // w) + 1)]
    
    for i in range((n // w) + 1):
        if i + 1 == n // w + 1:
            for j in range((w * i) + 1, n + 1):
                arr[i].append(j)
            
            pad = (i + 1) * w - n
            if (i + 1) % 2 == 0:
                arr[i].sort(reverse=True)
                arr[i] = [0] * pad + arr[i]
            else:
                arr[i] = arr[i] + [0] * pad
        else:
            for j in range((w * i) + 1, w * (i + 1) + 1):
                arr[i].append(j)
            if (i + 1) % 2 == 0:
                arr[i].sort(reverse=True)
            
    target_depth = 0
    if num % w == 0:
        target_depth = num // w - 1
    else:
        target_depth = num // w
        
    target_index = arr[target_depth].index(num)
    
    answer = 1
    for k in range(target_depth + 1, len(arr)):
        print(arr[k][target_index])
        if arr[k][target_index] == 0:
            break;
        answer += 1
    
    return answer