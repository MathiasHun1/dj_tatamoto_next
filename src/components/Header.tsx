'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DrawerContent from './DrawerContent';
import useHideAnimation from '@/hooks/useHideAnimation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

import DecorWave from './DecorWave';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const containerVariants = {
  hidden: {
    y: '-125%',
  },
  visible: {
    y: '0',
  },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isHidden } = useHideAnimation();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [navTabValue, setNavTabValue] = useState(0);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.SyntheticEvent) => {
    setAnchorEl(e.target as HTMLButtonElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePathChange = (_event: React.SyntheticEvent, newValue: number) => {
    setNavTabValue(newValue);
  };

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
          component="div"
          sx={{
            position: 'static',
            boxShadow: 'none',
            height: { xs: '30px', sm: '50px' },
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <Toolbar data-id="header-toolbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { md: 'none' },
                  width: '50px',
                }}
              >
                <MenuIcon sx={{ width: '100%', height: '100%', aspectRatio: 1 }} />
              </IconButton>
              <Box
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'block' },
                  pt: 2,
                }}
              >
                {/* Logo */}
                <Box sx={{ width: '70px' }} onClick={() => setNavTabValue(0)}>
                  <Link href="/">
                    <Image src="/DJTata_logo_clipped.svg" alt="logo dj tatamoto" width={100} height={100} />
                  </Link>
                </Box>
              </Box>

              {/* Navigation links desktop*/}
              <Tabs
                value={navTabValue}
                onChange={(e, value) => handlePathChange(e, value)}
                role="navigation"
                sx={{
                  display: { xs: 'none', md: 'block' },
                  '& .MuiTab-root': {
                    color: (theme) => theme.palette.text.primary,
                  },
                  '& .MuiTab-root.Mui-selected': {
                    color: (theme) => theme.palette.secondary.light,
                  },
                }}
              >
                <Tab component={Link} href="/" label="Kezdőlap" />

                <Tab component={Link} href="/bemutatkozas" label="Bemutatkozás" />

                <Tab label="Szolgáltatások" onClick={handleOpen} />

                <Tab component={Link} href="/kapcsolat" label="Kapcsolat" />
              </Tabs>
              <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                <MenuItem>
                  <Link href="/szolgaltatasok/eskuvodj" onClick={handleClose}>
                    Esküvő
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link href="/szolgaltatasok/rendezvenydj" onClick={handleClose}>
                    Rendezvény
                  </Link>
                </MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Navigation links mobile */}
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
