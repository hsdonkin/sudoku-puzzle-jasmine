import { myPuzzle } from './../src/sudoku.js'


describe ('sudoku', function(){
  it ('should test whether something is or is not a number', function(){
    console.log("Test " + myPuzzle.grid[0][0]);
    expect(myPuzzle.grid[0][0]).toEqual(1);
  });

});
