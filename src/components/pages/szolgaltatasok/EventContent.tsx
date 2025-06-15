import { Grid, Container, Typography, Stack } from '@mui/material';

import AccordionComponent from './Accordion';
import EventCard from '@/components/EventCard';

const accordionData = [
  {
    question: 'Adhatok le kívánságlistát?',
    answer:
      'Természetesen! Ha szeretnéd, megbeszélhetjük a lejátszandó mixek stílusát, és rám bízhatod a playlistet - De akér te is adhatsz kívánságlistát - Legjobb a kettő elegye. Az este zenéjének kialakitása teljesen rugalmas ',
  },
  {
    question: 'Hozott pendrive-ről játszol le számot?',
    answer: 'Igen ha .mp3 vagy .wav formátumban van',
  },
  {
    question: 'A megbeszélt ár tartalmazza a füstgépet is?',
    answer:
      'A megegyezésünk tartalmazza az összes technikát, nincsenek megelepetés felárak',
  },
  {
    question: 'Van  időkorlát a buliban?',
    answer: 'Nincs, addig maradok amíg igény van rá',
  },
  {
    question: 'A buli előtt menyi idővel érkezel?',
    answer:
      'Legalább két óra kell a szükséges technika összeszereléséhez, tehát két órával a buli előtt',
  },
];

const EventContent = () => {
  return (
    <Container maxWidth="lg" sx={{ pb: { md: 6 } }}>
      <Grid
        container
        sx={{
          position: 'relative',
          zIndex: 10,
          transform: { xs: 'translateY(-100px)' },
        }}
        spacing={{ xs: 8 }}
      >
        <Grid size={{ xs: 12, md: 8 }} offset={{ md: 4 }} sx={{ zIndex: 10 }}>
          <Typography variant="body1" color="text.primary">
            <Typography component="span" variant="h6">
              Profi DJ szolgáltatás minden eseményre -
            </Typography>{' '}
            Születésnapról, céges buliról, vagy bármilyen más ünnepi alkalomról
            van szó, rendezvény DJ-ként állok rendelkezésedre. Több 1000
            elérhető dal mellet, az esetlegesen helyszínen felvetődő
            kívánságokat is be tudom szerezni azonnal. Mindenki megtalálja a
            kedvére való zenét, a legkisebbektől a legidősebbekig. A zenei
            felhozatal mellett a látványos fénytechnikával, füstgéppel
            gondoskodom arról, hogy a hangulat felejthetetlen legyen. Bármilyen
            környezetben is tartod az eseményt, a modern felszereltségem
            lehetővé teszi, hogy a megbízásodat gondtalanul teljesítsem. A
            barátságos ár mellett profi szolgáltatást nyújtok, amellyel biztos
            lehetsz benne, hogy a rendezvényed a legjobb kezekben lesz! Keress
            bizalommal, és tegyük együtt felejthetetlenné az eseményt!
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <AccordionComponent data={accordionData} />
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
            justifyContent={{ md: 'center' }}
            direction={{ md: 'row' }}
            sx={{ pt: { md: 6 } }}
          >
            <EventCard
              imageSource="/restaurant.jpg"
              cardText="Éttermi aláfestés"
            />
            <EventCard
              imageSource="/event_outdoor.jpg"
              cardText="Kültéri rendezvény"
              sx={{ transform: { md: 'translateY(20%)' } }}
            />
            <EventCard imageSource="/karaoke_3.jpg" cardText="Karaoke" />
            <EventCard
              imageSource="/dance.jpg"
              cardText="Tánc"
              sx={{ transform: { md: 'translateY(20%)' } }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventContent;
