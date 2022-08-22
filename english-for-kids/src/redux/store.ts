import { combineReducers, createStore } from 'redux';
import { reducer } from './reducers/categoriesReducer';

export const reducers = combineReducers({
  reducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
