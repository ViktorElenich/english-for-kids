import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import { Box, CardMedia, Container, Button } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import { setMistakes } from '../../redux/actions/actions';
import { Nullable, RouteParams } from '../../types/types';
import { ICard } from '../../interface';
import cardsData from '../../assets/JSON/cards.json';
import { countingStatistics } from '../../utils/utils';
import {RouteEnum, StatisticsCategory} from '../../enums/enums';
import CardWord from './Card/Card';
import ButtonPlay from '../../common/Button/Button';
import SwitchButton from '../../common/Switch/Switch';
import './CardsContainer.scss';

const starWin = '../icons/starWin.svg';
const starEmpty = '../icons/star.svg';

const correct = new Audio('../sounds/correct.mp3');
const error = new Audio('../sounds/error.mp3');
const success = new Audio('../sounds/success.mp3');
const failure = new Audio('../sounds/failure.mp3');

const CardsContainer: FC = () => {
  const { categoryName } = useParams<RouteParams>();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [gameMode, setGameMode] = useState(false);
  const [repeatAudio, setRepeatAudio] = useState(false);
  const [audio, setAudio] = useState<Nullable<HTMLAudioElement>>(null);
  const [stars, setStars] = useState<boolean[]>([]);
  const [cards, setCards] = useState<Nullable<ICard[]>>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const playGame = () => {
    const words = cards!.map((card) => card.word).sort(() => Math.random() - 0.5);
    let currentWord = 0;
    let mistakes = 0;
    const wordsUsed: Nullable<string>[] = [];

    const sayWord = () => {
      const currentAudio = new Audio(`../sounds/${words[currentWord]}.mp3`);
      currentAudio.play();
      setAudio(currentAudio);
    };
    sayWord();

    cardsRef.current.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.getAttribute('data-name') === words[currentWord]) {
          card.style.filter = 'blur(5px)';
          card.parentElement?.classList.remove('active-card');
          correct.play();
          countingStatistics(`${words[currentWord]}`, StatisticsCategory.Correct);

          currentWord += 1;
          wordsUsed.push(card.getAttribute('data-name'));
          setStars((prevState) => [...prevState, true]);

          if (currentWord < words.length) {
            setTimeout(sayWord, 500);
          } else {
            setTimeout(() => {
              if (mistakes > 0) {
                failure.play();
              } else {
                success.play();
              }
              dispatch(setMistakes(mistakes));
              navigate('/final-page');
            }, 1000);
          }
        } else if (!wordsUsed.includes(card.getAttribute('data-name'))) {
          setStars((prevState) => [...prevState, false]);
          error.play();
          countingStatistics(`${words[currentWord]}`, StatisticsCategory.Wrong);
          mistakes += 1;
        }
      });
    });
  };

  const handleClickPlay = () => {
    if (!repeatAudio) {
      setRepeatAudio(true);
      playGame();
    } else {
      audio?.play();
    }
  };

  const addCardRef = (element: HTMLDivElement) => {
    if (element && !cardsRef.current.includes(element)) {
      cardsRef.current.push(element);
    }
  };

  const handleSwitchInput = () => {
    setGameMode(!gameMode);
  };

  useEffect(() => {
    if (categoryName === 'repeat-difficult-words') {
      setCards(JSON.parse(localStorage.getItem('difficult-words') || '[]'));
    } else {
      setCards(cardsData[categoryName as keyof typeof cardsData]);
    }
  }, [categoryName]);

  useEffect(() => {
    if (!gameMode) {
      setRepeatAudio(false);
      setStars([]);
    }
  }, [gameMode]);

  return (
    <Container
      className={'layout'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '1920px',
        width: '100%',
        overflowY: 'auto',
        margin: 0,
        '@media (min-width: 1200px)': {
          maxWidth: '100%',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px'
        }}
      >
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '250px',
          width: '100%',
        }}
        >
          <NavLink
            to={RouteEnum.Categories}
            className={'navBack'}
          >
            <ForwardIcon sx={{ transform: 'rotate(180deg)'}} />
            Back</NavLink>
          <SwitchButton checked={gameMode} onChange={handleSwitchInput} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0px',
        }}
      >
        {gameMode && <ButtonPlay repeat={repeatAudio} onClick={handleClickPlay} />}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        {stars.map((star, i) => (
          <CardMedia
            sx={{
              width: '30px',
              height: '30px',
            }}
            component="img"
            image={`${star ? starWin : starEmpty}`}
            alt=""
            key={i}
          />
        ))}
      </Box>
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(270px, 1fr))',
          gap: '15px',
          width: '100%',
          '@media (min-width: 600px)': {
            width: 'calc(100% - 270px)',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
        }}
      >
        {cards?.map((card) => (
          <CardWord
            addCardRef={addCardRef}
            word={card.word}
            image={card.image}
            translation={card.translation}
            key={card.word}
            gameMode={gameMode}
          />
        ))}
      </Container>
    </Container>
  );
};

export default CardsContainer;
