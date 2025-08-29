const solution = (phone_number) => {
    const lastFourNumber = phone_number.slice(phone_number.length - 4)
    // const star = Array.from({length: phone_number.length - lastFourNumber.length}, () => '*').join("")
    const star = '*'.repeat(phone_number.length - 4)
    
    
    return star + lastFourNumber
}

// function solution(phone_number) {
    
//     let answer = [];
    
//     for(var i = 0; i < (phone_number.length - 4); i++) {
//         answer.push("*");
//     }
//     for (var j = (phone_number.length - 4); j < phone_number.length; j++) {
//         answer.push(phone_number[j]);
//     }
    
//     return answer.join("");
// }