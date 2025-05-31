import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';

type Props = {
  navItems: { linkText: string; url: string }[];
  handleDrawerToggle: () => void;
};

const DrawerContent = ({ navItems, handleDrawerToggle }: Props) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.linkText} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.url}>
                <ListItemText primary={item.linkText} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerContent;
