import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { ICategories } from '../../interface';
import CardsCategories from '../CardsCategories/CardsCategories';
import cards from '../../assets/JSON/cards.json';

const Categories: FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const arr = JSON.parse(localStorage.getItem('categories')!);
      setCategories(arr);
    } else {
      const links = Object.keys(cards);
      const arr = Object.values(cards).map((card, index) => {
        const randomIndex = Math.floor(Math.random() * card.length);
        const randomItem: ICategories = card[randomIndex];
        randomItem.link = links[index];
        randomItem.key = v4();
        return randomItem;
      });
      localStorage.setItem('categories', JSON.stringify(arr));
      setCategories(arr);
    }
  }, []);

  return (
    <>
      {categories.map((category) => {
        // @ts-ignore
        return <CardsCategories categoriesData={category} key={category.key} />;
      })}
    </>
  );
};

export default Categories;
