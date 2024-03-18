class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value
    }
    
    dequeue() {
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front += 1
        return value
    }
    
    peek() {
        return this.queue[this.front]
    }
    
    size() {
        return this.rear - this.front
    }
}

function solution(maps) {
    const queue = new Queue()
    const [n, m] = [maps.length, maps[0].length];
    const [targetX, targetY] = [n - 1, m - 1]
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    queue.enqueue([0, 0, 1])

    while (queue.size() > 0) {
        const [x, y, cost] = queue.dequeue();
        if (x === targetX && y === targetY) return cost;
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (maps[nx][ny] === 1) {
                queue.enqueue([nx, ny, cost + 1])
                maps[nx][ny] = 0;
            }
        }
    }
    
    return -1
}