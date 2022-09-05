import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../enums/enums';

interface Props {
  key: string;
  categoriesData: {
    key: string;
    link: string;
    image: string;
    category: string;
  };
}

const CardsCategories: FC<Props> = ({ categoriesData }) => {
  const { link, category, image } = categoriesData;

  return (
    <NavLink to={`${RouteEnum.Categories}/${link}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: '0px 0px 0px 0px',
          borderRadius: '15px',
        }}
      >
        <CardMedia
          component="img"
          sx={{
              maxHeight: '200px',
              borderRadius: '15px',
              transition: 'all 0.4s',
              '&:hover': {
                  transform: 'scale(1.1)',
              }
          }}
          image={`../${image}`}
          alt={category}
        />
        <CardContent
          sx={{
            padding: '8px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              margin: 0,
              fontFamily: 'Irish Grover, cursive',
              textTransform: 'uppercase',
              color: '#C43302'
            }}
            gutterBottom
            variant="h5"
          >
            {category}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default CardsCategories;
