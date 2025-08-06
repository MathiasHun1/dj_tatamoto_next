import { Box, Container, Stack, Typography } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import Link from 'next/link';

import DecorLine from '@/components/DecorLine';
import WhyMeList from '@/components/pages/home/WhyMeList';
import ServicesList from '@/components/pages/home/ServicesList';
import { grey } from '@mui/material/colors';

export default function Home() {
  return (
    <>
      <HeroSection backgroundURL="/hero2.jpg" mobileHeight={80} desktopHeight={80}>
        <Stack
          data-id="stackElement"
          direction="column"
          spacing={5}
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: '20%',
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
        <DecorLine />
      </HeroSection>

      {/*------------ SZOLGÁLTATÁSOK -----------*/}

      <ServicesList />

      {/*------------ MIERT ENGEM --------------*/}
      <Container maxWidth="lg" sx={{ position: 'relative', backgroundColor: grey[900] }}>
        <Box component="section" sx={{ pt: 18 }}>
          <WhyMeList />
        </Box>
      </Container>
    </>
  );
}
