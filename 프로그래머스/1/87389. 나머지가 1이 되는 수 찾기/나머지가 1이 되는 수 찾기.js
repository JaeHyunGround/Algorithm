const solution = (n) => {
    let answer = 0;
    
    for (let i = 1; i <= n-1; i++) {
        if (n % i === 1) {
            answer = i
            break;
        }
    }
    
    return answer
}


// function solution(n) {
//     let state = true;
//     let num = 1;
    
//     while(state) {
//         if (n % num === 1) {
//             state = false;
//             break;
//         } else {
//             num++;
//         }
//     }
    
//     return num;
// }