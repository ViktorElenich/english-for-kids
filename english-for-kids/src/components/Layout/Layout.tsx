import React, { FC } from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

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
      <Main />
    </Box>
  )
}

export default Layout