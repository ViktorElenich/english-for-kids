import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../enums/enums';
import ForwardIcon from '@mui/icons-material/Forward';

interface ButtonBackProps {
  text: string
}

const ButtonBack: FC<ButtonBackProps> = ({ text }) => {
  return (
    <NavLink to={RouteEnum.Categories} className={'navBack'}>
      <ForwardIcon sx={{ transform: 'rotate(180deg)' }} />
      {text}
    </NavLink>
  );
};

export default ButtonBack;
