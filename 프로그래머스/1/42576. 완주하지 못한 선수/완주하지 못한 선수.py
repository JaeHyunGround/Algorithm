def solution(participant, completion):
    dict = {}
    for i in participant:
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1
    
    for c in completion:
        dict[c] -= 1
        
        
    for key in dict.keys():
        if dict[key] > 0:
            return key