import React, { FC, useState } from 'react';
import ReactCardFlip from "react-card-flip";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReplayIcon from '@mui/icons-material/Replay';
import {useSelector} from "react-redux";

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
  const [isRotate, setIsRotate] = useState(false);
  // @ts-ignore
  const isPlay = useSelector((state) => state.mode.isPlay);
  const playAudioHandler = () => {
    const audio = new Audio();
    audio.src = `../${data.audioSrc}`;
    audio.play();
  };

  const onRotateCard = () => setIsRotate(!isRotate);

  return (
    <ReactCardFlip isFlipped={isRotate}>
      <Card
        sx={isPlay ? {
          backgroundColor: '#17cd75b5',
          maxWidth: 340,
          width: '100%',
          height: '100%',
        } : {
          backgroundColor: '#c74e4ebf',
          maxWidth: 340,
          width: '100%',
          height: '100%',
        }}
      >
        <CardMedia component="img" height="180" image={`../${data.image}`} alt={data.word} />
        <CardContent
          sx={{
            padding: '0px',
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
            justifyContent: 'space-between',
            padding: 0
          }}
        >
          <Button onClick={playAudioHandler}>
            <VolumeUpIcon sx={{color: 'white'}} />
          </Button>
          <Button onClick={onRotateCard}>
            <ReplayIcon sx={{color: 'white'}} />
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 340,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={onRotateCard}
      >
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
            {data.translation}
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};

export default Cards;

