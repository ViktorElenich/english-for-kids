import React from 'react';
import {Button, Container} from "@mui/material";
import {purple} from "@mui/material/colors";

const HomePage = () => {
  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(https://i.pinimg.com/originals/1a/57/9d/1a579d0d2f0996d38482b2591e9af850.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Button
        href='/categories'
        variant='contained'
        size='large'
        sx={{
          marginTop: '200px',
          fontSize: 16,
          width: '150px',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          transition: 'all 0.4s',
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'all 0.4s'
          },
        }}
      >Start</Button>
    </Container>
  );
};

export default HomePage;
