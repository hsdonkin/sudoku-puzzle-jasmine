import { myPuzzle, SudokuPuzzle } from './../src/sudoku.js'


describe ('sudoku', function(){
  it ('should test whether something is or is not a number', function(){
    myPuzzle.numberCheck();
    expect(myPuzzle.valid).toEqual(true);
  });

  it('should tell whether an array has unique numbers 1-9', function(){
      myPuzzle.uniqueNumberCheck();
      expect(myPuzzle.valid).toEqual(true);
  });
});



// describe ('sudoku', function(){
//   it ('test whether all entries in an array are numbers', function(){
//     /* eslint-disable */
//     console.log(myPuzzle.grid[0]);
//     myPuzzle.grid.forEach(function(sudokuRow) {
//       sudokuRow.forEach(function(arrayEntry){
//         console.log(arrayEntry);
//         expect(arrayEntry).toEqual(jasmine.any(Number));
//
//     });
//
//     });
//     /* eslint-enable */
//   });
//
// });
