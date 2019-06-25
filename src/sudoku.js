function SudokuPuzzle(inputGrid) {
  this.grid = inputGrid;
}



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
console.log("Test ");
