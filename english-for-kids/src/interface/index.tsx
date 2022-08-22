export interface ICategories {
  [key: string]: string;
}

export interface StatisticsItem {
  word: string;
  translation: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  percent: number;
  image: string;
}

export interface ICard {
  category: string;
  image: string;
  translation: string;
  word: string;
}

export interface ReducerState {
  stateGameMode: boolean;
  stateRepeat: boolean;
  mistakes: number;
}
