function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0
    
    let cases = works.sort((a, b) => a - b)
    let len = cases.length;
    
    while (n) {
        let max = cases[len - 1]
        
        for (let i = len - 1; i >= 0; i--) {
            if (max <= cases[i]) {
                cases[i]--;
                n--;
            }
            if (n <= 0) break;
        }
    }
    
    const answer = cases.reduce((acc, cur) => acc + cur ** 2, 0)
    return answer;
}