import React, { useState } from 'react';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  handleDrawerToggle: () => void;
};

const DrawerContent = ({ handleDrawerToggle }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2 }}>
        <Box sx={{ width: '60px', marginInline: 'auto' }}>
          <Image
            src="/DJTata_logo_clipped.svg"
            alt="logo dj tatamoto"
            width={100}
            height={100}
          />
        </Box>
      </Box>
      <Divider />
      <List>
        <ListItemButton component={Link} href="/">
          <ListItemText primary="Kezdőlap" />
        </ListItemButton>

        <ListItemButton component={Link} href="/bemutatkozas">
          <ListItemText primary="Bemutatkozás" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Szolgáltalások" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} href="/szolgaltatasok/eskuvodj">
              <ListItemText primary="Esküvő" sx={{ pl: 3 }} />
            </ListItemButton>

            <ListItemButton
              component={Link}
              href="/szolgaltatasok/rendezvenydj"
            >
              <ListItemText primary="Rendezvény" sx={{ pl: 3 }} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} href="/galeria">
          <ListItemText primary="Fotók" />
        </ListItemButton>

        <ListItemButton component={Link} href="/kapcsolat">
          <ListItemText primary="Kapcsolat" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DrawerContent;
