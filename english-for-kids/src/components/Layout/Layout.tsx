import React, { FC } from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

const Layout: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        rowGap: 2,
      }}
    >
      <SideBar />
      <Main />
    </Box>
  )
}

export default Layout