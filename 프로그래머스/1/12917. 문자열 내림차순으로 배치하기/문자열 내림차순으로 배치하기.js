const solution = (s) => {
    return s.split("").sort().reverse().join("");
}

// function solution(s) {
    
//     return s.split("").sort().reverse().join("");
// }

// sort는 유니코드 기준으로 오름차순 정렬해주는 매서드
// sort((a, b) => a - b) 는 숫자를 비교할 때 사용됨...
// 유니코드 값으로 영어 대문자는 소문자보다 작기 때문에 오름차순으로 정렬 후 reverse 매서드로 뒤집으면 된다.