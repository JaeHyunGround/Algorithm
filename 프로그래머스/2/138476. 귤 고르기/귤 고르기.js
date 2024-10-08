function solution(k, tangerine) {
    let target = tangerine.length - k // 제거해야 하는 귤 갯수
    let map = new Map()
    
    for (const t of tangerine) {
        map.set(t, (map.get(t) || 0) + 1)
    }
    
    let sortMap = [...map.entries()].sort((a, b) => a[1] - b[1])
    
    while (target > 0) {
        let minSizeCount = sortMap[0][1]
        
        if (minSizeCount <= target) {
            target = target - minSizeCount
            sortMap.shift();
        } else {
            target = target - minSizeCount
        }
    }
    
    return sortMap.length;
}