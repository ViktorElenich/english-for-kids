import { ROTATE_TRAIN_CARD } from '../const/const';

export const rotateTrainCard = () => ({
  type: ROTATE_TRAIN_CARD,
});

const initialState = {
  isBack: false,
};

export const trainCard = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case ROTATE_TRAIN_CARD:
      return {
        ...state,
        isBack: !state.isBack,
      };

    default:
      return state;
  }
};
