const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const binarySearch = (trees, target) => {
  let left = 1;
  let right = trees[trees.length - 1];
  let mid = Math.floor((right + left) / 2);
  const totalTrees = trees.reduce((acc, cur) => acc + cur, 0);

  while (left <= right) {
    let treesLength = trees
      .map((tree) => (tree <= mid ? tree : mid))
      .reduce((acc, cur) => acc + cur, 0);

    if (totalTrees - treesLength >= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((right + left) / 2);
  }

  return mid;
};

console.log(binarySearch(trees, M));