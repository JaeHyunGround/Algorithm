function solution(age) {
    const currentYear = new Date().getFullYear(); // 2024
    const questionYear = currentYear - 2 // 2024 - 2 = 2022
    
    return questionYear - age + 1
}