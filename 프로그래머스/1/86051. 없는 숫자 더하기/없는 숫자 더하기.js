const solution = (numbers) => {
 return numbers.reduce((acc, crr) => acc - crr, 45)
}

// function solution(numbers) {
//     let no_num = []; // 없는 숫자를 담는 배열
    
//     for (var i = 0; i <= 9; i++) {
//         if(numbers.indexOf(i) == -1) {
//             no_num.push(i);
//         }
//     }
    
//     let answer = no_num.reduce((a, b) => a + b);
    
//     return answer;
// }