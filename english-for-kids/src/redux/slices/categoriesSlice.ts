import { ReducerState } from '../../interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ReducerState = {
  stateGameMode: false,
  stateRepeat: false,
  mistakes: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStateGameMode: (state, action) => {
      state.stateGameMode = action.payload;
    },
    setStateRepeat: (state, action) => {
      state.stateRepeat = action.payload
    },
    setMistakes: (state, action) => {
      state.mistakes = action.payload
    }
  },
});

export const { setStateGameMode, setStateRepeat, setMistakes } = categoriesSlice.actions;
export default categoriesSlice.reducer;
