def solution(n):
    answer = 0
    one = bin(n)[2:].count('1')
    
    flag = True
    
    while flag:
        cur = n + 1
        if bin(cur)[2:].count('1') == one:
            answer = cur
            flag = False
            break;
        n = cur
    
    return answer