import React, { FC } from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import CardsContainer from "../CardsContainer/CardsContainer";

const Layout: FC = () => {
  return (
    <Box
      className={'layout'}
      sx={{
        height: '100vh',
        maxWidth: '1920px',
        width: '100%',
      }}
    >
      <SideBar />
      <CardsContainer />
    </Box>
  )
}

export default Layout