import theme from '@/theme';
import { Box } from '@mui/material';
import React from 'react';

const ReferencesPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '40px', md: '100px' },
        paddingTop: { xs: '130px', md: '200px' },
        overflow: 'hidden',
      }}
    >
      <Box
        className="wrapper"
        sx={{
          width: { xs: '90vw', md: '55vw' },
          aspectRatio: '16/9',
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GsAhlExFVsY?si=yYxEsc_OtjlSC9o_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
          }}
        ></iframe>
      </Box>

      <Box
        className="wrapper"
        sx={{
          width: { xs: '90vw', md: '55vw' },
          aspectRatio: '16/9',
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KCcwKesgPZk?si=rMJ8Eew1ll8J743k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
          }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default ReferencesPage;
