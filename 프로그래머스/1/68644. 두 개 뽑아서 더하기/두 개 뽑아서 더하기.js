function solution(numbers) {
    const arr = [];
    
    numbers.forEach((num, idx) => {
        for (let i = idx + 1; i < numbers.length; i++) {
            arr.push(num + numbers[i])
        }
    })
    
    const answer = [...new Set(arr)].sort((a, b) => a - b)
    
    return answer;
}