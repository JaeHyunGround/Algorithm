def solution(hp):
    answer = 0
    
    attack = [5, 3, 1]
    for i in attack:
        answer += hp // i
        hp = hp % i
    
    return answer


# 그리디