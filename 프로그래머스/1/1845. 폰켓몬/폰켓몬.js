function solution(nums) {
    let answer = 0;
    let N = nums.length;
    
    let myMap = new Map();
    nums.forEach((phonekemon) => {
        if (!myMap.get(phonekemon)) {
            myMap.set(phonekemon, 1)
        } else {
            myMap.set(phonekemon, myMap.get(phonekemon) + 1)
        }
    })
    
    let newNums = [...myMap.keys()]
    
    if (newNums.length >= N/2) {
        answer = N/2
    } else {
        answer = newNums.length
    }
    
    
    return answer;
}