// function solution(arr) {
//     var answer = 0;
//     let sum = arr.reduce((a, b) => a + b);
    
//     answer = sum / arr.length;
    
//     return answer;
// }

function solution(arr) {
    let sumValue = arr.reduce((a, b) => a + b)
    let arrLength = arr.length
    
    return sumValue / arrLength
}