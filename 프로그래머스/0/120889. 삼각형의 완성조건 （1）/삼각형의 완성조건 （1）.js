function solution(sides) {
    const arr = sides.sort((a, b) => a - b)
    
    return arr[2] < arr[0] + arr[1] ? 1 : 2;
}