def solution(prices):
    answer = []
    
    for i in range(len(prices)):
        target = prices[i]
        arr = []
        for j in range(i + 1, len(prices)):
            arr.append(prices[j])
            if target > prices[j]:
                break;
                
        answer.append(len(arr))
                
    
    return answer