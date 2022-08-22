import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../enums/enums';
import ForwardIcon from '@mui/icons-material/Forward';

const ButtonBack = () => {
  return (
    <NavLink to={RouteEnum.Categories} className={'navBack'}>
      <ForwardIcon sx={{ transform: 'rotate(180deg)' }} />
      Back
    </NavLink>
  );
};

export default ButtonBack;
