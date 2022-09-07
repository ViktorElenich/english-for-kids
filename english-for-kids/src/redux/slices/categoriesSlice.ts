import { ReducerState } from '../../interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ReducerState = {
  mistakes: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setMistakes: (state, action) => {
      state.mistakes = action.payload
    }
  },
});

export const { setMistakes } = categoriesSlice.actions;
export default categoriesSlice.reducer;
