import React from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

type Props = {
  width?: string;
  className?: string;
  sx?: SxProps<Theme>;
};

const Logo = ({ sx, className }: Props) => {
  return (
    <Box
      className={className}
      sx={{ aspectRatio: '16/5', '& img': { objectFit: 'contain' }, ...sx }}
    >
      <img
        src="/tataLogo.svg"
        alt=""
        style={{
          width: '100%',
        }}
      />
    </Box>
  );
};

export default Logo;
