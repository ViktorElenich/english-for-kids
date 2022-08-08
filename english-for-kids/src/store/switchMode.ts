import { CHANGE_MODE } from '../const/const';

export const changeMode = () => ({
  type: CHANGE_MODE,
});

const initialState = {
  isPlay: false,
};

export const mode = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        isPlay: !state.isPlay,
      };

    default:
      return state;
  }
};
