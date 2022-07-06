import { GRID, NUMBERS } from 'typings';
import { shuffle, isInRow, isInCol } from 'utils';

const numbers : NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fullGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;
  for( let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = 1 % 9;

    if(grid[row][col] === 0) {
      shuffle(numbers);
      for(let value of numbers) {
        // is not in grid row
        if(!isInRow({ grid, row, value})) {
          // is not in grid col
          if (!isInCol({ grid, col, value})) {
            const square = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            ]
          }
        }
        
        // is not in the grid square
        grid[row][col] = value;
        // is grid full
        // othergise we run fullGrid again
      }
    }
  }
  grid[row][col] = 0; 
}

export default fullGrid;
