import { combineReducers } from "redux";
import gridSlice from './gridSlice';


const rootReducer = combineReducers({
  grid: gridSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export * from './gridSlice';
