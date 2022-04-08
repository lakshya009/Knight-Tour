//This program is to solve the Knight tour problem
//this can be executed using the console
const prompt = require("prompt-sync")();

let n = 8;
let m = 8;

function findPossibleMoves(mat) {
  //two arrays defining all the possible moves of a knight
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  let position = prompt("What's the position? ");
  let array = position.split(",");

  let p = Number(array[0]);
  let q = Number(array[1]);

  let count = 0;

  for (let i = 0; i < 8; i++) {
    let x = p + X[i];
    let y = q + Y[i];

    if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0) {
      let move = "(" + x + "," + y + ")";
      console.log(move);
      count++;
    }
  }

  return count;
}

//Defining an array of the empty places on the board (empty = 0, occupied = 1)
let mat = [
  [1, 0, 1, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
];

let count = findPossibleMoves(mat);

console.log("Total number of moves = " + count);
