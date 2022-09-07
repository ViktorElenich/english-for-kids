import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// @ts-ignore
import failure from '../../assets/failure.svg';

interface LoserProps {
  mistakes: number;
}

const Loser: FC<LoserProps> = ({ mistakes }) => {
  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Irish Grover, cursive',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#C43302',
            fontSize: '2.5em',
            '@media (max-width: 480px)': {
              fontSize: '1.8em',
            },
          }}
        >
          You lost! Train and try again!
          <br/>
          {`You made ${mistakes} mistake`}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          maxWidth: '560px'
        }}
        component="img"
        image={failure}
        alt="failure"
      />
    </Card>
  );
};

export default Loser;
