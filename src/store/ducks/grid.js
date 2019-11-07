import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  setMargins: ["margins"],
  setColumns: ["nColumns"]
});

export const GridTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  margins: 0,
  columns: 1
});

/* Reducers */

export const setMargins = (state, { margins }) => state.merge({ margins });
export const setColumns = (state, { columns }) => state.merge({ columns });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MARGINS]: setMargins,
  [Types.SET_COLUMNS]: setColumns
});
