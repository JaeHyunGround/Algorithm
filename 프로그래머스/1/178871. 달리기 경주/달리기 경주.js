function solution(players, callings) {
    let dict = {};
    players.forEach((player, index) => {
        dict[player] = index
    })
    
    callings.forEach((calling) => {
        let currentIndex = dict[calling]
        let changePlayer = players[currentIndex - 1] 

        
        players[currentIndex] = changePlayer
        players[currentIndex - 1] = calling
        
        dict[calling] -= 1
        dict[changePlayer] += 1
    })
    
    return players
    
}