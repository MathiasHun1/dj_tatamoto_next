'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import { grey } from '@mui/material/colors';

import WhyMeList from '@/components/pages/home/WhyMeList';
import ServicesList from '@/components/pages/home/ServicesList';
import Reviews from '@/components/Reviews';
import ImageGallery from '@/components/ImageGallery';

import { mainPageImages } from '@/shared/imageData';

export default function Home() {
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
      <Box sx={{ pt: 0, pb: { xs: 4, md: 12 }, px: { xs: 2, md: 4 }, backgroundColor: grey[900] }}>
        <ImageGallery images={mainPageImages} />
      </Box>

      {/*------------ Vélemények --------------*/}
      <Reviews />
    </>
  );
}
