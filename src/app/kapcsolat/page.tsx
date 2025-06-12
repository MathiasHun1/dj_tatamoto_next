import { Container, Typography, List, ListItem } from '@mui/material';
import { Phone, LocationPin, Mail } from '@mui/icons-material';

const page = () => {
  return (
    <Container sx={{ pt: { xs: 20, md: '30vh' }, height: '100vh' }}>
      <Typography
        variant="h3"
        color="text.secondary"
        textAlign="center"
        sx={{ pb: 5 }}
      >
        Kapcsolat
      </Typography>
      {/*
      <Typography variant="body1" color="text.primary" textAlign="center">
        Keress meg közvetlenül valamelyik elérhetőségemen, vagy írj egy
        ajánlatkérőt az oldalon található formula segítségével
      </Typography> */}
      <List sx={{ width: 'fit-content', marginInline: 'auto' }}>
        <ListItem>
          <Phone sx={{ mr: 2 }} />
          +3630 - 414 - 7026
        </ListItem>

        <ListItem>
          <Mail sx={{ mr: 2 }} />
          laszlo70@outlook.com
        </ListItem>

        <ListItem>
          <LocationPin sx={{ mr: 2 }} />
          1201 Budapest
        </ListItem>
      </List>
    </Container>
  );
};

export default page;
