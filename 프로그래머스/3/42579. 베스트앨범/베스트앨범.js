function solution(genres, plays) {
    const answer = []
    const genresTimeMap = new Map()
    const songNumberObj = {};
    
    genres.forEach((genre, index) => {
        genresTimeMap.set(genre, (genresTimeMap.get(genre) || 0) + plays[index])
        
        if (!songNumberObj[genre]) {
            songNumberObj[genre] = [[plays[index], index]]
        } else {
            songNumberObj[genre] = [...songNumberObj[genre], [plays[index], index]]
        }
    })
    
    
    let genresTimeArr = [...genresTimeMap.entries()].sort((a, b) => b[1] - a[1])
    genresTimeArr.forEach(([genre, _]) => {
        let genreSongArr = songNumberObj[genre].sort((a, b) => b[0] - a[0]).map((item) => item[1])
        answer.push(...genreSongArr.slice(0, 2))
    })
    
    return answer
}