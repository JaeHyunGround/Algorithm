function solution(participant, completion) {
    let myMap = new Map();
    participant.forEach((people) => {
        if (!myMap.get(people)) myMap.set(people, 1) 
        else myMap.set(people, myMap.get(people) + 1)
    })
    completion.forEach((people) => {
        if (myMap.get(people)) myMap.set(people, myMap.get(people) - 1)
    })
    
    let failIndex = [...myMap.values()].indexOf(1)
    let answer = [...myMap.keys()][failIndex]
    
    return answer;
    
}