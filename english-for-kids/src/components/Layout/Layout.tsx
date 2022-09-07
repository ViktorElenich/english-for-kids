import React, { FC } from 'react';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      className={'layout'}
      sx={{
        height: '100vh',
        maxWidth: '1920px',
        width: '100%',
        overflowY: 'auto',
      }}
    >
      <SideBar />
      <Container
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(270px, 1fr))',
          gap: '15px',
          float: 'right',
          width: '100%',
          position: 'relative',
          pt: '75px',
          '@media (min-width: 600px)': {
            width: 'calc(100% - 270px)',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
