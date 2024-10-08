function solution(topping) {
    let answer = 0;
    
    let toppingMap = new Map();
    for (const t of topping) {
        toppingMap.set(t, (toppingMap.get(t) || 0) + 1)
    }
    
    let toppingSet = new Set();
    for (const t of topping) {
        toppingSet.add(t)
        toppingMap.set(t, (toppingMap.get(t) || 0) - 1)
        
        if (toppingMap.get(t) === 0) {
            toppingMap.delete(t)
        }
        
        if (toppingSet.size === toppingMap.size) {
            answer += 1
        }
    }
    
    
    return answer;
}