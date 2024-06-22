function solution(clothes) {
    let answer = 0;
    let map = new Map()
    
    clothes.forEach((line) => {
        const [cloth, type] = line
        if (!map.has(type)) {
            map.set(type, 1)
        } else {
            map.set(type, map.get(type) + 1)
        }
    })
    
    
    answer = [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1
    return answer;
}