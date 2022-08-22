import cardsData from '../assets/JSON/cards.json';
import { StatisticsCategory } from '../enums/enums';
import { StatisticsItem } from '../interface';

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
};
