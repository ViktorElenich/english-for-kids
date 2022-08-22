import React from 'react';
import {NavLink} from "react-router-dom";
import { Container } from '@mui/material';
import { RouteEnum } from '../enums/enums';
import './HomePage.scss';

const HomePage = () => {
  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage:
          'url(https://i.pinimg.com/originals/1a/57/9d/1a579d0d2f0996d38482b2591e9af850.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NavLink
        to={RouteEnum.Categories}
        className={'btnHomePage'}
      >
        Start
      </NavLink>
    </Container>
  );
};

export default HomePage;
