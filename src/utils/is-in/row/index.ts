import { GRID, N, NUMBERS } from "typings";

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}
/**
 * A function that returns true if the value is already being used 
 * @param input Object with 9x9 Sudoju Grid, row index and value
 * @returns boolean
 */
const isInRow = ({grid, row, value} : IInput) : boolean => {
  return grid[row].includes(value);
}

export default isInRow;
