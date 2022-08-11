import React, { FC } from 'react';
import { useParams } from 'react-router';
import data from '../../../cards.json';

const CardsContainer: FC = () => {
  const params = useParams();
  const cardsCategory = [];
  for (let key in data) {
    // @ts-ignore
    if (data[key] === params) {
      // @ts-ignore
      cardsCategory.push(data[key]);
    }
  }
  console.log(cardsCategory)
  return <div>{cardsCategory}</div>;
};

export default CardsContainer;
