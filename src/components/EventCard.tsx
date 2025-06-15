'use client';

import { Box, Typography, darken } from '@mui/material';
import Image from 'next/image';
import { yellow, deepPurple } from '@mui/material/colors';

const EventCard = ({
  imageSource,
  cardText,
}: {
  imageSource: string;
  cardText: string;
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: '70%',
          md: '200px',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          border: '5px solid linear-gradient(red, white)',
          borderRadius: 2,
          overflow: 'hidden',
          // boxShadow: (theme) => `0 0 40px 0px hsla(0, 0%, 50%)`,
          // boxShadow: (theme) => `0 0 20px 0px ${theme.palette.secondary.light}`,
          // boxShadow: (theme) =>
          //   `2px 1px 1px 0px ${theme.palette.primary.light}`,
          '&:after': {
            position: 'absolute',
            inset: 0,
            content: '""',
            background:
              'linear-gradient(to bottom, black -30%, hsla(0, 0% ,0% , 0.2) 70%, transparent)',
          },
        }}
      >
        <Image
          src={imageSource}
          alt=""
          width={500}
          height={800}
          style={{ borderRadius: '10px' }}
        />
      </Box>
      <Typography
        variant="h5"
        color="text.primary"
        sx={{
          p: 1,
          letterSpacing: '5px',
          position: 'absolute',
          top: { xs: '10%' },
          left: '-10%',
          zIndex: 100,
          transform: 'rotate(10deg)',
          filter: 'drop-shadow(10px 10px 20px  hsla(0, 0%, 100%, 0.8))',
        }}
      >
        {cardText}
      </Typography>
    </Box>
  );
};

export default EventCard;
