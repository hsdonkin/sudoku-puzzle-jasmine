import { myPuzzle } from './../src/sudoku.js'


describe ('sudoku', function(){
  it ('should test whether something is or is not a number', function(){
    /* eslint-disable */
    expect(myPuzzle.grid[0][0]).toEqual(jasmine.any(Number));
    /* eslint-enable */
  });

});

describe ('sudoku', function(){
  it ('test whether all entries in an array are numbers', function(){
    /* eslint-disable */
    console.log(myPuzzle.grid[0]);
    myPuzzle.grid[0].forEach(function(arrayEntry){
      console.log(arrayEntry);
      expect(arrayEntry).toEqual(jasmine.any(Number));

    });
    /* eslint-enable */ 
  });

});
