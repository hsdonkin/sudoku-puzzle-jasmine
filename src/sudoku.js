export function SudokuPuzzle(inputGrid) {
  this.grid = inputGrid;
  this.valid = true;
}

SudokuPuzzle.prototype.numberCheck = function(){
  for (var row = 0; row < this.grid.length; row++) {
    for (var col = 0; col < this.grid[row].length; col++) {
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




var sampleRow1 = [1,2,3,4,5,6,7,8,9];
var sampleRow2 = [1,2,3,4,5,6,7,8,9];
var sampleRow3 = [1,2,3,4,5,6,7,8,9];
var sampleRow4 = [1,2,3,4,5,6,7,8,9];
var sampleRow5 = [1,2,3,4,5,6,7,8,9];
var sampleRow6 = [1,2,3,4,5,6,7,8,9];
var sampleRow7 = [1,2,3,4,5,6,7,8,9];
var sampleRow8 = [1,2,3,4,5,6,7,8,9];
var sampleRow9 = [1,2,3,4,5,6,7,8,9];

var sampleGrid = [sampleRow1, sampleRow2, sampleRow3, sampleRow4, sampleRow5, sampleRow6, sampleRow7, sampleRow8, sampleRow9];

export var myPuzzle = new SudokuPuzzle(sampleGrid);



// export var puzzleTest = myPuzzle.numberCheck();
