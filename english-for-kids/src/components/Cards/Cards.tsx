import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReplayIcon from '@mui/icons-material/Replay';

interface CardsProps {
  key: number;
  data: {
    audioSrc: string;
    image: string;
    translation: string;
    word: string;
  };
}

const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 340,
        width: '100%',
        height: '100%',
      }}
    >
      <CardMedia component="img" height="140" image={`${data.image}`} alt={data.word} />
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
          {data.word}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button>
          <VolumeUpIcon />
        </Button>
        <Button>
          <ReplayIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;

/* 
<Card>
      <CardMedia />
      <CardContent>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Button><VolumeUpIcon /></Button>
        <Button><ReplayIcon /></Button>
      </CardActions>
    </Card>
*/
