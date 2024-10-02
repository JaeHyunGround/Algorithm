function solution(n) {
    let input = n.toString().split("").sort((a, b) => b - a).join("")
    return +input
}

// 숫자 80억은 문자열로 바꿨을 때 20자도 안되는 짧은 길이이다.