'use client';
import Box from '@mui/material/Box';

const DecorationLeftLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        content: '""',
        inset: 0,
        clipPath: {
          xs: 'polygon(0 100%, 100% 100%, 100% 95%, 0 100%)',
          md: 'polygon(0 100%, 100% 100%, 100% 95%, 0 100%)',
        },
        backgroundColor: (theme) => theme.palette.background.default,
        zIndex: 100,
      }}
    />
  );
};

export default DecorationLeftLine;
