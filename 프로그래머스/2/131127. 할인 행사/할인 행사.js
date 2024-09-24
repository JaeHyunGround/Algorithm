function solution(want, number, discount) {
    let answer = 0;

    for (let j = 0; j <= discount.length - 10; j++) {
        let compaerNumber = [...number]
        let count = 0;
        for (let k = j; k < j + 10; k++) {
            if (want.indexOf(discount[k]) !== -1 && compaerNumber[want.indexOf(discount[k])] !== 0) {
                compaerNumber[want.indexOf(discount[k])] = compaerNumber[want.indexOf(discount[k])] - 1
                count += 1
            } else {
                count = 0;
            }
        }
        if (count >= 10) answer += 1
    }
    
    return answer;
}