import { NUMBERS, SQUARE } from "typings";

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

/**
 * A function that retruns true if the value is already being used in square
 * @param input : Object with 3x3 square and value
 * @returns boolean
 */
const isInSquare = ({ square, value} : IInput) : boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;

