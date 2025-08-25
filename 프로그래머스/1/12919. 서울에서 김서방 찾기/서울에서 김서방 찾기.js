// function solution(seoul) {
//     let answer = '';
    
//     let kimLocation = seoul.indexOf('Kim');
//     answer = `김서방은 ${kimLocation}에 있다`
    
//     return answer;
// }

function solution(seoul) {
    const kimIndex = seoul.indexOf('Kim')
    
    const answer = (index) => {
        return `김서방은 ${index}에 있다`
    }
    
    return answer(kimIndex)
}