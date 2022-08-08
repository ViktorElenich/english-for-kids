import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Props {
  image: string;
  name: string;
  key: number;
}

const MainCards: FC<Props> = ({ image, name }) => {
  // @ts-ignore
  const isPlay = useSelector((state) => state.mode.isPlay);
  const url = name
    .replace(/[{()}]/g, '')
    .replace(/ /g, '-')
    .toLowerCase();

  return (
    <NavLink to={`/${url}`} style={{ textDecoration: 'none' }}>
      <Card sx={isPlay ? { backgroundColor: '#17cd75b5' } : { backgroundColor: 'red' }}>
        <CardMedia component="img" sx={{ maxHeight: '200px' }} image={`${image}`} alt={name} />
        <CardContent
          sx={{
            padding: '8px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              margin: 0,
            }}
            gutterBottom
            variant="h5"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default MainCards;
