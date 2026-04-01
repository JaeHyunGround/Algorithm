function solution(array, height) {
    let answer = array.length;
    const sortArr = array.sort((a, b) => a - b)
    
    for (let i = 0; i < sortArr.length; i++) {
        if (height < sortArr[i]) {
            break;
        }
        answer -= 1
    }
    
    return answer
}