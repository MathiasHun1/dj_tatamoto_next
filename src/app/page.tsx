'use client';

import { useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import { grey } from '@mui/material/colors';

import WhyMeList from '@/components/pages/home/WhyMeList';
import ServicesList from '@/components/pages/home/ServicesList';
// import ImageCarousel from '@/components/ImageCarousel';
import Reviews from '@/components/Reviews';
import ImageGallery from '@/components/ImageGallery';

import img1 from '../../public/images/gallery/main/1.jpg';
import img2 from '../../public/images/gallery/main/2.jpg';
import img3 from '../../public/images/gallery/main/3.jpg';
import img4 from '../../public/images/gallery/main/4.jpg';
import img6 from '../../public/images/gallery/main/6.jpg';
import img7 from '../../public/images/gallery/main/7.jpg';
import img8 from '../../public/images/gallery/main/8.jpg';

const imagesArray = [img1, img2, img3, img4, img6, img7, img8];

export default function Home() {
  // const [carouselOpen, setCarouselOpen] = useState(false);

  return (
    <>
      <HeroSection backgroundURL="/hero2.jpg" mobileHeight={100} desktopHeight={100}>
        <Stack
          data-id="stackElement"
          direction="column"
          spacing={5}
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: '30%',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Logo sx={{ width: { xs: '250px', md: '400px' } }} />

          <Typography variant="h4" color="secondary" sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}>
            ESKÜVŐ DJ
          </Typography>

          <Typography variant="h4" color="secondary" sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}>
            RENDEZVÉNY DJ
          </Typography>

          <Typography variant="h4" color="secondary" sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}>
            BUDAPESTEN
          </Typography>

          <Typography variant="h4" color="secondary" sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}>
            ORSZÁGOSAN
          </Typography>
        </Stack>
        {/* <DecorLine /> */}
      </HeroSection>

      {/*------------ SZOLGÁLTATÁSOK -----------*/}

      <ServicesList />

      {/*------------ MIERT ENGEM --------------*/}
      <Container maxWidth="lg" sx={{ position: 'relative', backgroundColor: grey[900] }}>
        <Box component="section" sx={{ pt: 8 }}>
          <WhyMeList />
        </Box>
      </Container>

      {/*------------ GALERIA --------------*/}
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '40px 0' }}>-- GALÉRIA HELYE --</div>
      <Box sx={{ pb: 8 }}>
        <ImageGallery images={imagesArray} />
      </Box>
      {/* {carouselOpen && <ImageCarousel imagesArray={imagesArray} activeIndex={0} setCarouselOpen={setCarouselOpen} />} */}

      {/*------------ Vélemények --------------*/}
      <Reviews />
    </>
  );
}
