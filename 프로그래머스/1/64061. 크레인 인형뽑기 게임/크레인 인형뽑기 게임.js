function solution(board, moves) {
    let answer = 0;
    const stack = Array.from({length: board.length}, () => [])
    
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 0) {
                stack[j].push(board[i][j])   
            }
        }
    }
    
    const basket = []
    for (let c of moves) {
        let num = stack[c - 1].pop()
        if (num) basket.push(num)
        
        if (basket.length > 0 && basket[basket.length - 1] === basket[basket.length - 2]) {
            basket.pop();
            basket.pop();
            answer += 2
        }
    }
    
    return answer;
}