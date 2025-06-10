'use client';

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
      <HeroSection
        backgroundURL="/hero2.jpg"
        mobileHeight={80}
        desktopHeight={60}
      >
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

          <Typography
            variant="h4"
            color="secondary"
            sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}
          >
            ESKÜVŐ DJ
          </Typography>

          <Typography
            variant="h4"
            color="secondary"
            sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}
          >
            RENDEZVÉNY DJ
          </Typography>

          <Typography
            variant="h4"
            color="secondary"
            sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}
          >
            BUDAPESTEN
          </Typography>

          <Typography
            variant="h4"
            color="secondary"
            sx={{ fontWeight: 'bold', fontSize: { xs: '24px' } }}
          >
            ORSZÁGOSAN
          </Typography>
        </Stack>
        <DecorLine />
      </HeroSection>

      {/*--------- BEMUTATKOZÁS --------*/}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', bgcolor: grey[900] }}
      >
        <Box sx={{ pt: 5 }}>
          <Typography
            variant="h4"
            component="p"
            sx={{
              mb: 3,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Üdvözöllek!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
            A nevem Magyari László, avagy Dj TataMoto. Többéves tapasztalattal
            vállalok zeneszolgáltatást esküvőkre, céges bulikra és egyéb
            rendezvényekre – elérhető áron, megbízhatóan. Legyen szó retróról,
            mai slágerekről vagy egyedi kívánságokról, a jó hangulat garantált!
          </Typography>

          <Link href="/bemutatkozas">
            <Typography
              variant="h5"
              color="secondary"
              sx={{ textDecoration: 'underline' }}
            >
              Hosszabb bemutatkozás itt
            </Typography>
          </Link>
        </Box>
      </Container>

      {/*------------ MIERT ENGEM --------------*/}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', backgroundColor: grey[900] }}
      >
        <Box component="section" sx={{ pt: 18 }}>
          <WhyMeList />
        </Box>
      </Container>

      {/*------------ SZOLGÁLTATÁSOK -----------*/}
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 0, sm: 3 },
          pt: 10,
          position: 'relative',
        }}
      >
        <ServicesList />
      </Container>
    </>
  );
}
