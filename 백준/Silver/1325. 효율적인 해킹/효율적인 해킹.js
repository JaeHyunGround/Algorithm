const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [info, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map((value) => +value));

const [N, M] = info;

const solution = () => {
    // 컴퓨터의 신뢰하는 관계가 주어졌을 때, 그 관계 정보를 나타내는 2차원 배열 ( 인접리스트 )
    const graph = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < M; i++) {
        const [a, b] = input[i];

        // a가 b를 신뢰하므로 b가 해킹되면 a도 해킹된다. ( = b가 탐색되면 a도 탐색되어야 한다. )
        graph[b].push(a);
    }

    let max = 0; // 최대 해킹 컴퓨터 수
    let answer = [];

    const DFS = (n) => {
        // check: 해킹 여부를 나타내는 배열
        let check = Array.from({ length: N + 1 }, () => 0);
        let count = 1; // 해킹된 컴퓨터 수
        let stack = [n]; // DFS 탐색 스택

        check[n] = 1;

        // DFS를 탐색하면서 check배열의 값이 0인 노드에 한해서 count를 증가시키면서 stack에 push ( DFS 탐색 )
        while (stack.length) {
            const value = stack.pop();
            for (let i = 0; i < graph[value].length; i++) {
                if (!check[graph[value][i]]) {
                    count += 1;
                    check[graph[value][i]] = 1;
                    stack.push(graph[value][i]);
                }
            }
        }

        if (max > count) return;
        else if (max === count) answer.push(n);
        else {
            max = count;
            answer = [n];
        }
    };

    for (let i = 1; i <= N; i++) {
        DFS(i);
    }

    return answer.join(' ');
};

console.log(solution());