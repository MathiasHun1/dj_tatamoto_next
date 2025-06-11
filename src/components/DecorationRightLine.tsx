'use client';

import React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  bottom: '-1px',
  clipPath: 'polygon(0 100%, 100% 100%, 100% 90%, 0 70%)',
  backgroundColor: theme.palette.background.default,
  zIndex: 100,
}));

const DecorationRightLine = () => {
  return <StyledBox />;
};

export default DecorationRightLine;
