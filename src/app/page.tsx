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
      <HeroSection backgroundURL="/hero2.jpg" mobileHeight={65} desktopHeight={65}>
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

          <Typography component="h1" variant="h4" color="secondary" sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
            <span style={{ display: 'inline-block', marginBottom: '8px' }}>ESKÜVŐ DJ - RENDEZVÉNY DJ</span>
            <br />
            <span style={{ display: 'inline-block', marginBottom: '8px' }}>BUDAPESTEN</span>
            <br />
            <span>ORSZÁGOSAN</span>
          </Typography>

          <Typography component="h1" variant="h4" color="secondary" sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
            <Typography
              component="span"
              variant="h4"
              color="secondary"
              sx={{ fontWeight: 'bold', fontSize: { xs: '24px' }, display: 'block', pb: 2.5 }}
            >
              ESKÜVŐ DJ
            </Typography>
            <Typography
              component="span"
              variant="h4"
              color="secondary"
              sx={{ fontWeight: 'bold', fontSize: { xs: '24px' }, display: 'block', pb: 2.5 }}
            >
              RENDEZVÉNY DJ
            </Typography>
            <Typography
              component="span"
              variant="h4"
              color="secondary"
              sx={{ fontWeight: 'bold', fontSize: { xs: '24px' }, display: 'block', pb: 2.5 }}
            >
              BUDAPESTEN
            </Typography>
            <Typography
              component="span"
              variant="h4"
              color="secondary"
              sx={{ fontWeight: 'bold', fontSize: { xs: '24px' }, display: 'block', pb: 2.5 }}
            >
              ORSZÁGOSAN
            </Typography>
          </Typography>
        </Stack>
        {/* <DecorLine /> */}
      </HeroSection>

      {/*------------ SZOLGÁLTATÁSOK -----------*/}

      <ServicesList />

      {/*------------ MIERT ENGEM --------------*/}
      <Container maxWidth="lg" sx={{ position: 'relative', backgroundColor: grey[900] }}>
        <Box component="section" sx={{ pt: 0 }}>
          <WhyMeList />
        </Box>
      </Container>

      {/*------------ GALERIA --------------*/}
      <Typography component="h2" variant="h4" align="center" sx={{ pb: 4, textTransform: 'uppercase' }}>
        Néhány kép az eseményeimről
      </Typography>
      <Container maxWidth="lg" sx={{ pt: 0, pb: { xs: 12, md: 12 }, px: { xs: 2, md: 4 }, backgroundColor: grey[900] }}>
        <ImageGallery images={mainPageImages} />
      </Container>

      {/*------------ Vélemények --------------*/}
      <Typography component="h2" variant="h4" align="center" sx={{ pb: 3, textTransform: 'uppercase' }}>
        Rólam írták..
      </Typography>
      <Reviews />
    </>
  );
}
