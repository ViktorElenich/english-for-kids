import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Winner from '../../common/Winner/Winner';
import Loser from '../../common/Loser/Loser';
import ButtonBack from '../../common/Button/ButtonBack';

const FinalPage = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const mistakes = useSelector((state) => state.categories.mistakes);
  console.log(mistakes);
  return (
    <Container
      className={'layout'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        overflowY: 'auto',
        margin: 0,
        '@media (min-width: 1200px)': {
          maxWidth: '100%',
        },
      }}
    >
      {mistakes ? <Loser mistakes={mistakes} /> : <Winner mistakes={mistakes} />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '15px',
        }}
      >
        <ButtonBack text={'Main Menu'} />
        <button className={'navBack'} onClick={() => navigate(-1)}>
          New Game
        </button>
      </Box>
    </Container>
  );
};

export default FinalPage;
