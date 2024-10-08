function solution(brown, yellow) {
    const totalSize = brown + yellow
    
    for (let vertical = 3; vertical <= Math.sqrt(totalSize); vertical++) {
        if (totalSize % vertical === 0) {
            let horizontal = totalSize / vertical;
            
            if (brown === (horizontal + vertical - 2) * 2) {
                return [horizontal, vertical]
            }
        }
    }
    
    return [];
}