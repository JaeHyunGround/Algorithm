def solution(absolutes, signs):
    arr = []
    for i, num in enumerate(absolutes):
        if signs[i]:
            arr.append(num)
        else:
            arr.append(-num)
            
    return sum(arr)