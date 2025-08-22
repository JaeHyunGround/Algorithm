function solution(n) {
    let nArray = n.toString().split("").map(Number)
    return nArray.reduce((a, b) => a + b)
}