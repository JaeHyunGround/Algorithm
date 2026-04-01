function solution(money) {
    const coffee = Math.floor(money / 5500)
    const left = money - (coffee * 5500)
    
    return [coffee, left];
}