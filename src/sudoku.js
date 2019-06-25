export function SudokuPuzzle(inputGrid) {
  this.grid = inputGrid;
  this.valid = true;
}

SudokuPuzzle.prototype.numberCheck = function(){
  for (let row = 0; row < this.grid.length; row++) {
    for (let col = 0; col < this.grid[row].length; col++) {
      console.log(this.grid[row][col]);
      console.log(this.valid);
      if (isNaN(this.grid[row][col]) === true) {
        return this.valid = false;
      } else {
        this.valid = true;
      }
    }
  }
}

SudokuPuzzle.prototype.uniqueRowCheck = function(){
  for (let i = 0; i < this.grid.length; i++) {
    let rowCheck = [...new Set(this.grid[i])];
    if (rowCheck.length != this.grid[i].length) {
      return this.valid = false;
    }
  }
}

SudokuPuzzle.prototype.uniqueColCheck = function(){
  for (var i = 0; i < this.grid.length; i++) {
    let colArray = [];
    for (var x = 0; x < this.grid[i].length; x++) {
      colArray.push(this.grid[x][i]);
    }
    console.log(colArray);
    let colCheck = [...new Set(colArray)];
    if (colCheck.length != colArray.length) {
      return this.valid = false;
    }
  }


}







// THIS IS THE TEST PUZZLE
// let sampleRow1 = [1,2,3,4,5,6,7,8,9];
// let sampleRow2 = [1,2,3,4,5,6,7,8,9];
// let sampleRow3 = [1,2,3,4,5,6,7,8,9];
// let sampleRow4 = [1,2,3,4,5,6,7,8,9];
// let sampleRow5 = [1,2,3,4,5,6,7,8,9];
// let sampleRow6 = [1,2,3,4,5,6,7,8,9];
// let sampleRow7 = [1,2,3,4,5,6,7,8,9];
// let sampleRow8 = [1,2,3,4,5,6,7,8,9];
// let sampleRow9 = [1,2,3,4,5,6,7,8,9];



// // THIS IS A REAL SOLUTION
let sampleRow1 = [5,3,4,6,7,8,9,1,2];
let sampleRow2 = [6,7,2,1,9,5,3,4,8];
let sampleRow3 = [1,9,8,3,4,2,5,6,7];
let sampleRow4 = [8,5,9,7,6,1,4,2,3];
let sampleRow5 = [4,2,6,8,5,3,7,9,1];
let sampleRow6 = [7,1,3,9,2,4,8,5,6];
let sampleRow7 = [9,6,1,5,3,7,2,8,4];
let sampleRow8 = [2,8,7,4,1,9,6,3,5];
let sampleRow9 = [3,4,5,2,8,6,1,7,9];

let sampleGrid = [sampleRow1, sampleRow2, sampleRow3, sampleRow4, sampleRow5, sampleRow6, sampleRow7, sampleRow8, sampleRow9];

export let myPuzzle = new SudokuPuzzle(sampleGrid);



// export let puzzleTest = myPuzzle.numberCheck();
