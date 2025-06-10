'use client';

import { motion } from 'motion/react';
import * as React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DrawerContent from './DrawerContent';
import useHideAnimation from '@/hooks/useHideAnimation';
import DecorWave from './DecorWave';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;
const navItems = [
  {
    linkText: 'Kezdőlap',
    url: '/',
  },
  {
    linkText: 'Bemutatkozás',
    url: '/bemutatkozas',
  },
  {
    linkText: 'Szolgáltatások',
    url: '/szolgaltatasok',
    subPages: ['esküvő', 'rendezvény'],
  },
];
const containerVariants = {
  hidden: {
    y: '-125%',
  },
  visible: {
    y: '0',
  },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isHidden } = useHideAnimation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <motion.header
        style={{
          width: '100%',
          position: 'fixed',
          top: '0px',
          zIndex: 1000,
          isolation: 'isolate',
        }}
        data-element="header-motion-container"
        animate={isHidden ? 'hidden' : 'visible'}
        variants={containerVariants}
        transition={{
          duration: 0.35,
          ease: 'easeInOut',
        }}
      >
        <AppBar
          component="nav"
          sx={{
            position: 'static',
            boxShadow: 'none',
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <Toolbar data-id="header-toolbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.linkText} sx={{ color: '#fff' }}>
                    <Link href={item.url}>{item.linkText}</Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          component="nav"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          slotProps={{
            paper: {
              sx: {
                bgcolor: grey[800],
              },
            },
          }}
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>

        <Box
          data-id="decor-svg-container"
          sx={{
            position: '',
            top: 0,
            left: 0,
            width: '100%',
            height: { xs: '50px', md: '100px' },
          }}
        >
          <DecorWave />
        </Box>
      </motion.header>
    </>
  );
}
