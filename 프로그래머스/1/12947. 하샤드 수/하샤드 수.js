const solution = (x) => {
    const inputToArray = x.toString().split("").map(Number)
    const divideNum = inputToArray.reduce((acc, cur) => acc + cur)
    
    return x % divideNum === 0 ? true : false
}

// function solution(x) {
//     var answer = true;
    
//     let input = x.toString().trim().split("").map(Number);
//     let div_num = 0; // 나누는 수
    
//     for (var i = 0; i < input.length; i++) {
//         div_num += input[i];
//     }
    
//     if(x % div_num === 0) {
//         answer = true;
//     } else {
//         answer = false;
//     }
    
//     return answer;
// }