import React, { FC, useState, MouseEvent } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReplayIcon from '@mui/icons-material/Replay';
import Card from '@mui/material/Card';
import { StatisticsCategory } from '../../../enums/enums';
import { countingStatistics } from '../../../utils/utils';

interface CardProps {
  word: string;
  addCardRef: (element: HTMLDivElement) => void;
  image: string;
  translation: string;
  key: string;
  gameMode: boolean;
}

const CardWord: FC<CardProps> = ({ word, addCardRef, image, translation, gameMode }) => {
  const [isRotate, setIsRotate] = useState(false);
  const playAudioHandler = () => {
    const audio = new Audio();
    audio.src = `../sounds/${word}.mp3`;
    audio.play();
  };

  const onRotateCard = () => setIsRotate(!isRotate);

  const handleClickCard = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.localName !== 'button' && !gameMode) {
      countingStatistics(word, StatisticsCategory.Clicks);
    }
  };
  return (
    <ReactCardFlip isFlipped={isRotate}>
      <Card
        data-name={word}
        ref={addCardRef}
        sx={{ backgroundColor: '#d2dd33d4' }}
        onClick={handleClickCard}
      >
        <CardMedia
          component="img"
          height={gameMode ? '250' : '180'}
          image={`../${image}`}
          alt={word}
        />
        <CardContent sx={gameMode ? { display: 'none' } : { padding: '0px' }}>
          <Typography
            sx={{
              textAlign: 'center',
              margin: 0,
            }}
            gutterBottom
            variant="h5"
          >
            {word}
          </Typography>
        </CardContent>
        <CardActions
          sx={
            gameMode
              ? { display: 'none' }
              : {
                  justifyContent: 'space-between',
                  padding: 0,
                }
          }
        >
          <Button onClick={playAudioHandler}>
            <VolumeUpIcon sx={{ color: 'white' }} />
          </Button>
          <Button onClick={onRotateCard}>
            <ReplayIcon sx={{ color: 'white' }} />
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
            {translation}
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};

export default CardWord;
