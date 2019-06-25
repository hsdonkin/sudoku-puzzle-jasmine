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

SudokuPuzzle.prototype.uniqueNumberCheck = function(){
    for (let i = 0; i < this.grid.length; i++) {
      let rowCheck = [...new Set(this.grid[i])];
      if (rowCheck.length != this.grid[i].length) {
        return this.valid = false;
      }

    }
}




/* eslint-disable */
// SudokuPuzzle.prototype.numberCheck = function(){
//   this.grid.forEach(function(array){
//     array.forEach(function(entry){
//
//     console.log(entry);
//
//     });
//   })
// }
/* eslint-enable */




let sampleRow1 = [1,2,3,4,5,6,7,8,9];
let sampleRow2 = [1,2,3,4,5,6,7,8,9];
let sampleRow3 = [1,2,3,4,5,6,7,8,9];
let sampleRow4 = [1,2,3,4,5,6,7,8,9];
let sampleRow5 = [1,2,3,4,5,6,7,8,9];
let sampleRow6 = [1,2,3,4,5,6,7,8,9];
let sampleRow7 = [1,2,3,4,5,6,7,8,9];
let sampleRow8 = [1,2,3,4,5,6,7,8,9];
let sampleRow9 = [1,2,3,4,5,6,7,8,9];

let sampleGrid = [sampleRow1, sampleRow2, sampleRow3, sampleRow4, sampleRow5, sampleRow6, sampleRow7, sampleRow8, sampleRow9];

export let myPuzzle = new SudokuPuzzle(sampleGrid);



// export let puzzleTest = myPuzzle.numberCheck();
