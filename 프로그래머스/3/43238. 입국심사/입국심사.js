function solution(n, times) {    
    const binarySearch = (n, times) => {
        let left = BigInt(1); // 제일 최소인 시간
        let right = BigInt(times[times.length - 1] * n)
        let mid = BigInt((left + right) / 2n)
        let answer = right;
        
        while (left <= right) {
            let count = BigInt(0);
            for (let i = 0; i < times.length; i++) {
                count += mid / BigInt(times[i])
            }
            
            if (count >= n) {
                answer = mid
                right = mid - 1n
            } else {
                left = mid + 1n
            }
            
            mid = BigInt((left + right) / 2n)
        }
        
        return Number(answer.toString())
    }
    
    return binarySearch(n, times.sort((a, b) => a - b))
}

// 10^9 * 10^9 = 10^18
// Number가 커버 가능한 수는 10^16까지 이기에 BigInt 처리가 필요하다