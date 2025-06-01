import { Box } from '@mui/material';
import React from 'react';

const HeroSection = ({
  backgroundURL,
  children,
}: {
  backgroundURL: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
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
      }}
      data-id="hero-section"
    >
      {children}
    </Box>
  );
};

export default HeroSection;
