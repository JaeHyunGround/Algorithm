class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
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
    const c = maps.length;
    const r = maps[0].length
    
    const dc = [0, 0, 1, -1]
    const dr = [1, -1, 0, 0]
    
    const bfs = (start) => {
        const queue = new Queue();
        const visited = Array.from({length: c}, () => Array(r).fill([false, 0]))
        queue.enqueue(start)
        
        while (queue.size() > 0) {
            const [curC, curR, cost] = queue.dequeue();
            
            if (!visited[curC][curR][0]) {
                visited[curC][curR] = [true, cost]
                
                for (let i = 0; i < 4; i++) {
                    const nextC = curC + dc[i]
                    const nextR = curR + dr[i]
                    
                    if (nextC < 0 || nextR < 0 || nextC >= c || nextR >= r || maps[nextC][nextR] === 0) continue;
                    
                    queue.enqueue([nextC, nextR, cost + 1])
                }
            }
        }
        
        return visited[c - 1][r - 1][0] ? visited[c - 1][r - 1][1] : -1
    }
    
    return bfs([0, 0, 1])
}