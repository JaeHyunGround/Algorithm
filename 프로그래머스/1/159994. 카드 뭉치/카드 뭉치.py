from collections import deque

def solution(cards1, cards2, goal):
    answer = 'No'
    cards1 = deque(cards1) 
    cards2 = deque(cards2) 
    goal = deque(goal) 
    
    
    while goal:
        if cards1 and goal[0] == cards1[0]:
            cards1.popleft();
        elif cards2 and goal[0] == cards2[0]:
            cards2.popleft();
        else:
            break;
        goal.popleft()
            

    if len(goal) == 0:
        answer = 'Yes'
    
    return answer
            
        