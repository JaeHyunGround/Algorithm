def solution(s):
    count_t = 0;
    count_z = 0;
    
    while s != '1':
        count_t += 1
        count_z += s.count('0')
        s = bin(s.count('1'))[2:]
        
    return [count_t, count_z]