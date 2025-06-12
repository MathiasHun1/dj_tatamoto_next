'use client';

import React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  bottom: '-1px',
  clipPath: 'polygon(0 100%, 100% 100%, 100% 90%, 0 70%)',
  backgroundColor: theme.palette.background.default,
  zIndex: 100,
}));

const DecorationRightLine = ({ sx }: { sx?: SxProps<Theme> }) => {
  return <StyledBox sx={{ ...sx }} />;
};

export default DecorationRightLine;
