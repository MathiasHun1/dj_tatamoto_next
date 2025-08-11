import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid, Box, List, ListItem } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import Reviews from '@/components/Reviews';
import EventCard from '@/components/EventCard';
import eventImg from '../../../../public/images/gallery/event/event1.jpg';
import ImageGallery from '@/components/ImageGallery';
import { eventImages } from '@/shared/imageData';
import { grey } from '@mui/material/colors';

import HeroSection from '@/components/HeroSection';
// import EventContent from '@/components/pages/szolgaltatasok/EventContent';
import DecorationLeftLine from '@/components/DecorationLeftLine';
import AccordionComponent from '@/components/pages/szolgaltatasok/Accordion';
import { accordionEventsText, whyMeEventsText, howIWorkEventsText } from '@/shared/textData';
import CtaButton from '@/components/CtaButton';

const page = () => {
  return (
    <>
      <HeroSection backgroundURL="/event_hero.jpg" mobileHeight={65} desktopHeight={65}>
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
            <Typography component="h1">
              <Typography component="span" variant="h4" color="text.secondary" sx={{ display: 'block', pb: 5 }}>
                CÉGES BULI
              </Typography>
              <Typography component="span" variant="h4" color="text.secondary" sx={{ display: 'block', pb: 5 }}>
                PRIVÁT BULI
              </Typography>
              <Typography component="span" variant="h4" color="text.secondary" sx={{ display: 'block' }}>
                KÜLTÉRI RENDEZVÉNY
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <DecorationLeftLine />
      </HeroSection>

      <Container maxWidth="lg" sx={{ pb: { md: 6 }, pt: { xs: 6, md: 14 } }}>
        <Grid
          container
          sx={{
            position: 'relative',
            zIndex: 10,
          }}
          spacing={{ xs: 0 }}
        >
          <Grid size={12} offset={{ md: 0 }} sx={{ zIndex: 10 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography component="h2" variant="h4" color="text.secondary" sx={{ pb: 2 }}>
                  Profi DJ szolgáltatás minden eseményre
                </Typography>{' '}
                <Typography variant="body1" color="text.primary">
                  Születésnapról, céges buliról, vagy bármilyen más ünnepi alkalomról van szó, rendezvény DJ-ként állok rendelkezésedre. Több 1000
                  elérhető dal mellet, az esetlegesen helyszínen felvetődő kívánságokat is be tudom szerezni azonnal. Mindenki megtalálja a kedvére
                  való zenét, a legkisebbektől a legidősebbekig. A zenei felhozatal mellett a látványos fénytechnikával, füstgéppel gondoskodom arról,
                  hogy a hangulat felejthetetlen legyen.
                  {/*Image small screen */}
                  <Box component="span" sx={{ display: { xs: 'block', md: 'none' }, mt: 2, mb: 2 }}>
                    <Image
                      src={eventImg}
                      alt="DJ szolgáltatás"
                      width={500}
                      height={500}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </Box>
                  Bármilyen környezetben is tartod az eseményt, a modern felszereltségem lehetővé teszi, hogy a megbízásodat gondtalanul teljesítsem.
                  A barátságos ár mellett profi szolgáltatást nyújtok, amellyel biztos lehetsz benne, hogy a rendezvényed a legjobb kezekben lesz!
                  Keress bizalommal, és tegyük együtt felejthetetlenné az eseményt!
                </Typography>
              </Grid>

              {/*Image big screen */}
              <Grid size={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Image
                  src={eventImg}
                  alt="DJ szolgáltatás"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center' }, pt: 4 }}>
            <CtaButton />
          </Grid>

          <Grid size={12} sx={{ pb: { xs: 8, md: 12 } }}>
            {/*------------ MIÉRT ENGEM ? -----------*/}

            <Box sx={{ pt: { xs: 10, md: 15 } }}>
              <Typography component="h2" variant="h4" color="text.secondary" sx={{ pb: 2 }}>
                Miért válassz engem az rendezvényre?
              </Typography>
              <List
                disablePadding
                sx={{
                  '& .MuiListItem-root': {
                    pb: { md: 3 },
                  },
                }}
              >
                {whyMeEventsText.map((item, index) => (
                  <ListItem disableGutters sx={{ pt: 0, alignItems: 'flex-start' }} key={index}>
                    <CircleIcon sx={{ width: '12px', mt: 0.5, mr: 2 }} fontSize="small" />
                    <Typography variant="body1" color="text.primary">
                      <strong>{item.strongText}</strong>: {item.text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ pt: { xs: 5, md: 10 } }}>
              <Reviews />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 0 }}>
              <CtaButton />
            </Box>
          </Grid>

          {/*------------ HOGYAN DOLGOZOM  -----------*/}

          <Container disableGutters maxWidth="lg" sx={{ pb: { xs: 10, md: 10 } }}>
            <Box sx={{ pb: { xs: 4, md: 6 } }}>
              <Typography component="h2" variant="h4" color="text.secondary" sx={{ pb: 2 }}>
                Hogyan dolgozom?
              </Typography>
              <Box component="ol" sx={{ pl: 2.5 }}>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {howIWorkEventsText.map((item, index) => (
                    <li key={index}>
                      <Typography variant="body1" color="text.primary">
                        <strong>{item.strongText}</strong>: {item.text}
                      </Typography>
                    </li>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/*------------ GALERIA --------------*/}
            <Box sx={{ backgroundColor: grey[900] }}>
              <ImageGallery images={eventImages} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
              <CtaButton />
            </Box>
          </Container>

          {/*------------ GYIK  -----------*/}
          <Grid size={{ xs: 12 }}>
            <Typography component="h2" variant="h4" color="text.secondary" sx={{ pb: { xs: 4, md: 6 } }}>
              Gyakran ismételt kérdések
            </Typography>

            <AccordionComponent data={accordionEventsText} />
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              position: 'relative',
              filter: '',
            }}
          >
            <Stack
              spacing={{ xs: 4 }}
              alignItems="center"
              justifyContent={{ md: 'space-evenly' }}
              direction={{ md: 'row' }}
              sx={{ pt: { xs: 6 }, pb: { xs: 8, md: 8 } }}
            >
              <EventCard imageSource="/restaurant.jpg" cardText="Éttermi aláfestés" />
              <EventCard imageSource="/dance.jpg" cardText="Tánc" />
              <EventCard imageSource="/event_outdoor.jpg" cardText="Kültéri rendezvény" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
