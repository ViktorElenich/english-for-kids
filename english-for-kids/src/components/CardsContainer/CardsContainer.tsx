import { Container } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from 'react-router';
import data from '../../cards.json';
import Cards from './Cards/Cards';
import {Data} from "../../interface";

const CardsContainer: FC = () => {
  const params = useParams();
  const keys = Object.keys(data)
    .filter((key) => key === params.categoryId)
    .join('');
  const cardsCategory = [];
  // @ts-ignore
  cardsCategory.push(data[keys]);
  return (
    <Container
      component="main"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(270px, 1fr))',
        gap: '15px',
        float: 'right',
        width: '100%',
        position: 'relative',
        pt: '75px',
        '@media (min-width: 600px)': {
          width: 'calc(100% - 270px)',
        },
        '@media (min-width: 1200px)': {
          maxWidth: '100%',
        },
      }}
    >
      {cardsCategory.map((cards) => {
        return cards.map((card: Data, index: number) => {
          return <Cards key={index} data={card} />;
        });
      })}
    </Container>
  );
};

export default CardsContainer;
