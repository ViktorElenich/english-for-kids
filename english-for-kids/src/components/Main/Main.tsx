import React, { FC } from 'react';
import Container from '@mui/material/Container';
import './Main.scss';
import MainCards from '../Cards/MainCards';
import data from '../../cards.json';
import {captions} from "../../const/const";

const Main: FC = () => {
    const cardContent = [];
    for (let key in data){
        // @ts-ignore
        cardContent.push(data[key]);
    }
  return (
    <Container
      component="main"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
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
        {cardContent.map((card, index) => {
            return (
                <MainCards image={card[0].image} name={captions[index]} key={index} />
            )
        })}
    </Container>
  );
};

export default Main;
