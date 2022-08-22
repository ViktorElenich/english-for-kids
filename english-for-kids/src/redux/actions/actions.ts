import { ActionType } from '../../enums/enums';

export const setGameMode = (payload: boolean) => ({
  type: ActionType.SetGameMode as const,
  payload,
});

export const setRepeat = (payload: boolean) => ({
  type: ActionType.SetRepeat as const,
  payload,
});

export const setMistakes = (payload: number) => ({
  type: ActionType.SetMistakes as const,
  payload,
});

export type Action = ReturnType<typeof setGameMode | typeof setRepeat | typeof setMistakes>;
