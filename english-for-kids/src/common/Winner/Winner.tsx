import { FC } from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
// @ts-ignore
import success from "../../assets/success.svg";

interface WinnerProps {
  mistakes: number
}

const Winner: FC<WinnerProps> = ({ mistakes }) => {
  return (
    <Card sx={{
      background: 'transparent',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Irish Grover, cursive',
            textTransform: 'uppercase',
            color: '#C43302',
            fontSize: '2.5em',
            '@media (max-width: 480px)': {
              fontSize: '1.8em',
            },
          }}
        >
          Congratulations! You win!
        </Typography>
      </CardContent>
      <CardMedia
          component="img"
          image={success}
          alt="success"
        />
    </Card>
  )
}

export default Winner;