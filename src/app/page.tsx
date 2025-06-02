import { Box, Container, Stack, Typography } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import { grey } from '@mui/material/colors';
import Link from 'next/link';

import DecorLine from '@/components/DecorLine';
import WhyMeList from '@/components/pages/home/WhyMeList';
import ServicesList from '@/components/pages/home/ServicesList';

export default function Home() {
  return (
    <>
      <Box sx={{ position: 'relative', zIndex: -10 }}>
        <HeroSection backgroundURL="/hero.jpg">
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
        </HeroSection>
        <DecorLine />
      </Box>
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', backgroundColor: grey[900] }}
      >
        {/*--------- BEMUTATKOZÁS --------*/}
        <Box sx={{ pt: 5 }}>
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ mb: 3, textTransform: 'uppercase', textAlign: 'center' }}
          >
            Üdvözöllek!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'justify', mb: 3 }}
          >
            A nevem Magyari László, avagy Dj TataMoto. Évtizedes tapasztalattal
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
              Hosszabb bemutatkozás itt -
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

      <ServicesList />

      {/*------------ SZOLGÁLTATÁSOK -----------*/}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', backgroundColor: grey[900] }}
      >
        <Box component="section">{/* <ServicesList /> */}</Box>
      </Container>
    </>
  );
}
