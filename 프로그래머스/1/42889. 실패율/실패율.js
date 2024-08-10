function solution(N, stages) {
    stages.sort((a, b) => a - b)
    let totalUser = stages.length;
    
    const map = new Map();
    stages.forEach((num) => {
        if (num <= N) {
            if (!map.has(num)) {
                map.set(num, 1)
            } else {
                map.set(num, map.get(num) + 1)
            }      
        }
    })
    
    for (let i = 1; i <= N; i++) {
        let currentNumCount = map.has(i) ? map.get(i) : 0;
        
        map.set(i, currentNumCount / totalUser)
        totalUser -= currentNumCount
    }
    
    const answer = [...map.entries()].sort((a, b) => b[1] - a[1]).map((line) => line[0])
    
    return answer;
}