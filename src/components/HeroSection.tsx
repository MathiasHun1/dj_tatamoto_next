'use client';

import { Theme } from '@emotion/react';
import { Box, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  backgroundURL: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  mobileHeight?: number;
  desktopHeight?: number;
};

const HeroSection = ({
  backgroundURL,
  children,
  mobileHeight = 50,
  desktopHeight = 50,
  sx,
}: Props) => {
  const boxStyles = {
    position: 'relative',
    zIndex: -10,
    height: { xs: `${mobileHeight}%`, md: `${desktopHeight}%` },
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
