function solution(participant, completion) {
    let answer = '';
    let map = new Map();
    
    for (const p of participant) {
        if (map.has(p)) map.set(p, map.get(p) + 1)
        else map.set(p, 1)
    }
    
    for (const c of completion) {
        map.set(c, map.get(c) - 1)
    }
    
    const mapArr = map.entries()
    answer = [...mapArr].filter(([name, num]) => num !== 0)
    
    return answer[0][0];
}