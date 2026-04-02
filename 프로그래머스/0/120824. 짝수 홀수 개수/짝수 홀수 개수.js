function solution(num_list) {
    const even = num_list.filter(num => num % 2 === 0).length
    return [even, num_list.length - even]
}