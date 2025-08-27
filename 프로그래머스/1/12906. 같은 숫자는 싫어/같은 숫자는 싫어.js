const solution = (arr) => {
    const answer = [arr[0]];
    let top = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (top === arr[i]) continue;
        
        answer.push(arr[i])
        top = arr[i]
    }
    
    return answer
}


// function solution(arr) {
//     const answer = [];

//     for (const num of arr) {
//         if (answer.length > 0 && num === answer[answer.length - 1]) {
//             continue;
//         } else {
//             answer.push(num)
//         }
//     }
    
//     return answer;
// }