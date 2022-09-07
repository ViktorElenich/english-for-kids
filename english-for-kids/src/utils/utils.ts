import cardsData from '../assets/JSON/cards.json';
import { StatisticsCategory } from '../enums/enums';
import { StatisticsItem } from '../interface';
import { DEFAULT_ACTIVE_ROW } from '../const/const';

export const countingStatistics = (word: string, category: StatisticsCategory) => {
  const data = JSON.parse(localStorage.getItem('cards') || '[]');
  data.forEach((item: StatisticsItem) => {
    if (item.word === word) {
      switch (category) {
        case StatisticsCategory.Clicks:
          item.clicks += 1;
          break;
        case StatisticsCategory.Correct:
          item.correct += 1;
          break;
        case StatisticsCategory.Wrong:
          item.wrong += 1;
          break;
        default:
          break;
      }
      if (item.wrong + item.correct > 0) {
        item.percent = +((item.wrong * 100) / (item.wrong + item.correct)).toFixed(1);
      }
    }
  });
  localStorage.setItem('cards', JSON.stringify(data));
};

export const setLocalStorage = () => {
  const cards = JSON.parse(JSON.stringify(cardsData));
  const array = [];

  for (let key in cards) {
    if (Object.prototype.hasOwnProperty.call(cards, key)) {
      array.push(cards[key]);
    }
  }

  const flatArray = array.flat();
  flatArray.sort((a, b) => (a.word > b.word ? 1 : -1));

  const statistics: StatisticsItem[] = [];

  flatArray.forEach((card) => {
    const currentCard = {
      word: card.word,
      translation: card.translation,
      category: card.category,
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
      image: card.image,
    };
    statistics.push(currentCard);
  });

  localStorage.setItem('cards', JSON.stringify(statistics));
  localStorage.setItem('activeRow', JSON.stringify(DEFAULT_ACTIVE_ROW));
};

export const formingListWords = () => {
  const cards: StatisticsItem[] = JSON.parse(localStorage.getItem('cards') || '[]');

  cards.sort((a, b) => (a.wrong > b.wrong ? -1 : 1));

  const array = [];
  for (let i = 0; i < 8; i += 1) {
    if (cards[i].wrong > 0) array.push(cards[i]);
  }

  localStorage.setItem('difficult-words', JSON.stringify(array));
};

const capitalize = (string: string) => string[0].toUpperCase() + string.slice(1);

export const sortTable = (
  data: StatisticsItem[],
  field: string,
  direction: boolean
): StatisticsItem[] => {
  const newData: StatisticsItem[] = JSON.parse(JSON.stringify(data));

  if (direction) {
    newData.sort((a, b) =>
      a[field as keyof StatisticsItem] >= b[field as keyof StatisticsItem] ? 1 : -1
    );
  } else {
    newData.sort((a, b) =>
      a[field as keyof StatisticsItem] >= b[field as keyof StatisticsItem] ? -1 : 1
    );
  }

  localStorage.setItem('cards', JSON.stringify(newData));
  localStorage.setItem('activeRow', JSON.stringify({ title: capitalize(field), direction }));

  return newData;
};
