import { Theme } from '@emotion/react';
import { Box, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  backgroundURL: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const HeroSection = ({ backgroundURL, children, sx }: Props) => {
  const boxStyles = {
    height: { xs: '80dvh', md: '90dvh' },
    backgroundImage: `url(${backgroundURL})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    ':after': {
      position: 'absolute',
      content: '""',
      inset: 0,
      zIndex: 1,
      backgroundColor: 'hsla(0, 0%, 0%, 0.4)',
    },
    ...sx,
  };

  return (
    <Box sx={boxStyles} data-id="hero-section">
      {children}
    </Box>
  );
};

export default HeroSection;
