import { GRID, NUMBERS } from "typings";

interface IInput {
  col: number;
  grid: GRID;
  value: NUMBERS;
}

/**
 * A function that retruns true if the value is already being used in col
 * @param input : Object with 9x9 sudoku grid, col index and value
 * @returns boolean
 */
const isInCol = ({grid, col, value} : IInput) : boolean => {
  for(let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;
