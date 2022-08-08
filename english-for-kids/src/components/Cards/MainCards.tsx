import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

interface Props {
  image: string;
  name: string;
  key: number
}

const MainCards: FC<Props> = ({ image, name }) => {
  return (
    <NavLink to={`/${name}`}>
      <Card
        sx={{
          maxWidth: 340,
          width: '100%',
          height: '100%',
        }}
      >
        <CardMedia component="img" height="140" image={`${image}`} alt={name} />
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
