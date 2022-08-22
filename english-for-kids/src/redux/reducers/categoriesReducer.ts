import { ReducerState } from '../../interface';
import { Action } from '../actions/actions';
import { Reducer } from 'redux';
import { ActionType } from '../../enums/enums';

const initialState: ReducerState = {
  stateGameMode: false,
  stateRepeat: false,
  mistakes: 0,
};

export const reducer: Reducer<ReducerState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SetGameMode:
      return { ...state, stateGameMode: action.payload };
    case ActionType.SetRepeat:
      return { ...state, stateRepeat: action.payload };
    case ActionType.SetMistakes:
      return { ...state, mistakes: action.payload };
    default:
      return state;
  }
};
