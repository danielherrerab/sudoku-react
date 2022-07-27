import { createSlice } from "@reduxjs/toolkit";
import { GRID, BLOCK_COORDS, INDEX } from 'typings';
import { compareArrays, copyGrid, createGrid, removeNumbers } from "utils";

interface IinitialState {
  challengeGrid?: GRID;
  workingGrid?: GRID;
  solvedGrid?: GRID;
  selectedBlock?: BLOCK_COORDS;
  error?: string | boolean;
  completed: boolean;
}
export const initialState : IinitialState = {
  completed: false
};

const gridSlice = createSlice({
  name: 'grid',
  initialState: initialState,
  reducers: {
    setGrid: (state: IinitialState) => {
      const solvedGrid = createGrid();
      const copiedGrid = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(copiedGrid);
      const workingGrid = copyGrid(challengeGrid);
      state.challengeGrid = challengeGrid;
      state.workingGrid = workingGrid;
      state.solvedGrid = solvedGrid;
    },
    selectBlock: (state: IinitialState, action: any) => {
      const { payload } = action;
      state.selectedBlock = payload;
    },
    moveDown: (state: IinitialState) => {
      if (state.selectedBlock && state.selectedBlock[0] < 8) {
        state.selectedBlock = [(state.selectedBlock[0] + 1) as INDEX, state.selectedBlock[1]];
      }
    },
    moveUp: (state: IinitialState) => {
      if (state.selectedBlock && state.selectedBlock[0] > 0) {
        state.selectedBlock = [(state.selectedBlock[0] - 1) as INDEX, state.selectedBlock[1]];
      }
    },
    moveLeft: (state: IinitialState) => {
      if (state.selectedBlock && state.selectedBlock[1] > 0) {
        state.selectedBlock = [state.selectedBlock[0], (state.selectedBlock[1] - 1) as INDEX];
      }
    },
    moveRight: (state: IinitialState) => {
      if (state.selectedBlock && state.selectedBlock[1] < 8) {
        state.selectedBlock = [state.selectedBlock[0], (state.selectedBlock[1] + 1) as INDEX];
      }
    },
    fillBlock: (state: IinitialState, action: any) => {
      const { payload } = action;
      if (state.workingGrid === undefined || state.solvedGrid === undefined || state.selectedBlock === undefined) return;
      if (state.solvedGrid[state.selectedBlock[0]][state.selectedBlock[1]] !== payload ) {
        state.error = 'Ops';
        return;
      }
      state.workingGrid[state.selectedBlock[0]][state.selectedBlock[1]] = payload;
      if (compareArrays(state.workingGrid, state.solvedGrid)) state.completed = true;
    }
  },
  extraReducers: builder => {}
});

export const { 
  setGrid,
  selectBlock,
  moveDown,
  moveUp,
  moveLeft,
  moveRight,
  fillBlock
} = gridSlice.actions;
export default gridSlice.reducer;
