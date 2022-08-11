import React, { FC } from 'react';
import Container from '@mui/material/Container';
import './Main.scss';
import MainCards from '../CardsContainer/Cards/MainCards';
import data from '../../cards.json';
import { captions } from '../../const/const';
import Box from "@mui/material/Box";
import SideBar from "../SideBar/SideBar";

const Main: FC = () => {
  const cardContent = [];
  for (let key in data) {
    // @ts-ignore
    cardContent.push(data[key]);
  }
  return (
    <Box
      className={'layout'}
      sx={{
        height: '100vh',
        maxWidth: '1920px',
        width: '100%',
      }}
    >
      <SideBar />
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
        {cardContent.map((card, index) => {
          return <MainCards image={card[0].image} name={captions[index]} key={index} />;
        })}
      </Container>
    </Box>
  );
};

export default Main;
