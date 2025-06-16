import { Container, Typography, List, ListItem } from '@mui/material';
import { Phone, LocationPin, Mail } from '@mui/icons-material';
import Link from 'next/link';

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
      <List sx={{ width: 'fit-content', marginInline: 'auto' }}>
        <Typography variant="h5" color="secondary.light" sx={{ mt: 2 }}>
          Van konkrét elképzelésed, vagy csak érdeklődnél? <br /> Keress bátran
          valamelyik elérhetőségemen:{' '}
        </Typography>
        <ListItem sx={{ fontSize: '24px' }}>
          <Phone sx={{ mr: 2 }} />
          <Link href="tel:+36304147026">+3630 - 414 - 7026</Link>
        </ListItem>

        <ListItem sx={{ fontSize: '24px' }}>
          <Mail sx={{ mr: 2 }} />
          <Link href="mailto:laszlo70@outlook.com">laszlo70@outlook.com</Link>
        </ListItem>

        <Typography variant="h5" color="secondary.light" sx={{ mt: 2 }}>
          Vagy látogass meg személyesen:
        </Typography>

        <ListItem sx={{ fontSize: '24px' }}>
          <LocationPin sx={{ mr: 2 }} />
          <Link
            href="https://www.google.com/maps/place/Djtatamoto/@47.4303017,19.1140728,17z/data=!4m14!1m7!3m6!1s0x4741dd7eb9e549bd:0x9ac5b4c196c7bda4!2sDjtatamoto!8m2!3d47.4302982!4d19.1189437!16s%2Fg%2F11x842q0q3!3m5!1s0x4741dd7eb9e549bd:0x9ac5b4c196c7bda4!8m2!3d47.4302982!4d19.1189437!16s%2Fg%2F11x842q0q3?hl=hu&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            1201 Budapest, Szondi utca 11
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default page;
