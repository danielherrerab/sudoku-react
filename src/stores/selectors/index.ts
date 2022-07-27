import { RootState } from "stores/store"

export const getChallengeGrid = (state: RootState) => state.grid.challengeGrid;
export const getSolvedGrid = (state: RootState) => state.grid.solvedGrid;
export const getWorkingGrid = (state: RootState) => state.grid.workingGrid;
export const getSelectedBlock = (state: RootState) => state.grid.selectedBlock;
