'use client';

import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Reviews = dynamic(
  () => {
    const publicKey = 'fc9078bc-e5a6-4293-b229-1265ca76f40f';

    return Promise.resolve(() => (
      <Box sx={{ mb: 10 }}>
        <ReactGoogleReviews
          layout="carousel"
          featurableId={publicKey}
          carouselSpeed={10000}
          maxCharacters={300}
          maxItems={3}
          carouselClassName="carousel"
          carouselBtnClassName="carousel_btn"
          carouselBtnLeftClassName="carousel_btn_left carousel-btn-override"
          carouselBtnRightClassName="carousel_btn_right carousel-btn-override"
          showDots={false}
        />
      </Box>
    ));
  },
  { ssr: false }
);

export default Reviews;
