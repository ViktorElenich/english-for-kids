import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import './SideBar.scss';
import { navigationLinks } from '../../const/const';
import { RouteEnum } from '../../enums/enums';

const styles = {
  bg: 'linear-gradient(111.84deg, rgb(188 209 20 / 58%) 59.3%, rgba(26, 31, 55, 0) 100%)',
};

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const SideBar: FC<Props> = ({ window }) => {
  const [open, setOpen] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleOpenSideBar = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box>
      <List>
        {navigationLinks.map((item, index) => (
          <NavLink className={'navItem'} key={index} to={`${RouteEnum.Categories}${item.href}`}>
            <ListItem>
              <Button
                sx={{
                  background: '#d3911a',
                  textAlign: 'center',
                  borderRadius: 5,
                  width: '100%',
                  color: 'white',
                  border: '1px solid rgb(108, 75, 16, 0.5)',
                }}
                variant="outlined"
              >
                <ListItemText primary={item.name} />
              </Button>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'transparent',
          boxShadow: 0,
          '@media (max-width: 600px)': {
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
          }
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOpenSideBar}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              pl: '10px',
              fontFamily: 'Irish Grover, cursive',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '2.5em',
              '@media (max-width: 768px)': {
                fontSize: '1.6em'
              },'@media (max-width: 380px)': {
                fontSize: '1.2em'
              },
            }}>
            English For Kids
          </Typography>
          <Toolbar
            sx={{
              justifyContent: 'flex-end',
            }}
          ></Toolbar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleOpenSideBar}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: styles.bg,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: styles.bg,
              backdropFilter: 'blur(10px)',
              margin: '16px 0px 16px 16px',
              borderRadius: '16px',
              height: 'calc(100% - 32px)',
              borderRight: 0,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideBar;
