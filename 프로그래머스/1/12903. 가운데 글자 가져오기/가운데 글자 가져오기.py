def solution(s):
    answer = ''
    mid = len(s) // 2
    
    if len(s) % 2 == 0:
        answer = s[mid - 1] + s[mid]
    else:
        answer = s[mid]
        
    
    return answer


# 홀 짝 구분해서