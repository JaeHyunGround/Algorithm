const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((line) => line.split(" ").map(Number));

function isValid(num, row, col) {
  return !(inRow(num, row) || inCol(num, col) || inBox(num, row, col));
}

function inRow(num, row) {
  return board[row].includes(num);
}

function inCol(num, col) {
  return board.some((row) => row[col] === num);
}

function inBox(num, row, col) {
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return true;
      }
    }
  }

  return false;
}

function findEmptyPosition() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return null;
}

function findSolution() {
  const emptyPos = findEmptyPosition();

  if (!emptyPos) {
    return true;
  }

  const [row, col] = emptyPos;
  for (let num = 1; num <= 9; num++) {
    if (isValid(num, row, col)) {
      board[row][col] = num;
      if (findSolution()) {
        return true;
      }
      board[row][col] = 0;
    }
  }

  return false;
}

findSolution();

const answer = board.map((line) => line.join(" "));
console.log(answer.join("\n"));