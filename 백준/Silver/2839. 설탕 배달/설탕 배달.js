const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString();

let sugar = Number(input);
let error = -1; // 정확하게 N킬로그램을 만들 수 없을 경우 -1을 출력하기 위함

let five = Math.floor(sugar / 5); // 큰 수인 5kg이 얼마나 들어갈 수 있는 지 계산

while(five >= 0) {
    // 큰 수를 빼고 남은 설탕이 얼마인지 계산
    let left = sugar - (five * 5);
    if(left % 3 === 0) {
        error = left / 3 + five;
        break;
    } else {
        // 3으로 나누어 떨어지지 않으면 N킬로그램을 만들 수 없다.
        // 큰 수를 하나 뺴주고 다시 구해줌
        five -= 1;
    }
}

console.log(error);