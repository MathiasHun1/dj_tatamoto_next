import React from 'react';
import { Stack, Typography, Paper, Box, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { grey } from '@mui/material/colors';

const cards = [
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'MAHASZ jogdíjjal rendelkezem. Számlaképes szolgáltatóként, minden esetben ÁFA-mentes számla készül.',
  },
  {
    title: 'Megbízthatóság',
    body: 'Nálam nincsenek meglepetés költségek – amit megbeszélünk, azt kapod. A szolgáltatást rugalmasan alakítom, hogy minden a terveid szerint alakuljon.',
  },
  {
    title: 'Minőségi hangzás és látvány',
    body: 'Nagy teljesítményű professzionális hangrendszer, és programozható hangulatfények. A fények színvilága egyszerűen igazítható az esemény arculatához.',
  },
  {
    title: 'Színvonalas zenei szolgáltatás',
    body: 'Több tízezer dal, a retrótól a mai toplistákig. Legyen pop, rock, funky vagy R&B – nálam mindenki megtalálja a kedvencét!',
  },
  {
    title: 'Elérhető ár, kompromisszumok nélkül',
    body: 'A szolgáltatásaim nemcsak színvonalasak, hanem ár-érték arányban is kiemelkedőek. Hiszem, hogy a minőségi szórakoztatásnak nem kell vagyonba kerülnie.',
  },
];

const WhyMeList = () => {
  return (
    <Stack component="ul" sx={{ pb: 10, pl: 0, mb: 0 }}>
      <Typography component="h2" variant="h4" align="center" sx={{ textTransform: 'uppercase', pb: 4 }}>
        Miért érdemes engem választanod?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 0 }}>
        {cards.map((card, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }} offset={{ md: index === 4 ? 3 : 0 }}>
            <ListItem title={card.title} body={card.body} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

type Props = {
  title: string;
  body: string;
};

const ListItem = ({ title, body }: Props) => {
  return (
    <Paper elevation={24} sx={{ p: 3, backgroundColor: grey[800], height: { md: '100%' } }}>
      <Stack direction="row" spacing={2}>
        <Box>
          <CheckIcon color="secondary" fontSize="large" />
        </Box>
        <Box>
          <Typography component="h3" variant="h5" sx={{ pb: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default WhyMeList;
