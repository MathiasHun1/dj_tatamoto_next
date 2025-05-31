'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'motion/react';
import Link from 'next/link';
import DrawerContent from './DrawerContent';
import useHideAnimation from '@/hooks/useHideAnimation';

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
    <motion.div
      style={{
        width: '100%',
        background: 'red',
        position: 'sticky',
        top: '0px',
      }}
      data-element="header-container"
      animate={isHidden ? 'hidden' : 'visible'}
      variants={containerVariants}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" sx={{ position: 'static' }}>
          <Toolbar>
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
        </AppBar>
        <nav>
          <Drawer
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
          >
            <DrawerContent
              navItems={navItems}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Drawer>
        </nav>
      </Box>
    </motion.div>
  );
}
