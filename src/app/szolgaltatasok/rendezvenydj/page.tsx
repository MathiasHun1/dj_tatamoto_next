import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import HeroSection from '@/components/HeroSection';
import EventContent from '@/components/pages/szolgaltatasok/EventContent';
import DecorationLeftLine from '@/components/DecorationLeftLine';

const page = () => {
  return (
    <>
      <HeroSection backgroundURL="/event_hero.jpg" mobileHeight={100} desktopHeight={105}>
        <Container sx={{ height: '100%' }}>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 5 }}
            sx={{
              height: '100%',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              '& > *': {
                fontWeight: 'bold',
              },
            }}
          >
            <Typography component="h1" variant="h4" color="text.secondary">
              CÉGES BULI
            </Typography>
            <Typography component="h1" variant="h4" color="text.secondary">
              PRIVÁT BULI
            </Typography>
            <Typography component="h1" variant="h4" color="text.secondary">
              KÜLTÉRI RENDEZVÉNY
            </Typography>
          </Stack>
        </Container>
        <DecorationLeftLine />
      </HeroSection>

      <EventContent />
    </>
  );
};

export default page;
