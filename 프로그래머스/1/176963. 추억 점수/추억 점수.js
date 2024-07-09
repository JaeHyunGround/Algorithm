function solution(name, yearning, photo) {
    const answer = [];
    
    photo.forEach((arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (name.indexOf(arr[i]) !== -1) {
                sum += yearning[name.indexOf(arr[i])]
            }
        }
        answer.push(sum)
    })
    
    return answer;
}