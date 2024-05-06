function solution(nums) {
    let answer = 0;
    let halfN = nums.length / 2
    let newNums = [...new Set(nums)]
    
    answer = newNums.length >= halfN ? halfN : newNums.length
    
    return answer
}