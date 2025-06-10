'use client';

import {
  Container,
  Typography,
  List,
  ListSubheader,
  ListItem,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { grey } from '@mui/material/colors';

const SubHeader = styled(ListSubheader)({
  backgroundColor: 'inherit',
  color: 'primary.light',
  paddingInline: 0,
});

const LightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.divider,
}));

const SyledList = styled(List)(({ theme }) => ({
  paddingInline: theme.spacing(3),
  paddingBottom: 0,
  backgroundColor: theme.palette.background.default,
}));

const Footer = () => {
  return (
    <Container component="footer" maxWidth="lg" sx={{ pb: 5 }}>
      {/*----------- CONTACTS --------------*/}
      <SyledList>
        <SubHeader>KAPCSOLAT</SubHeader>

        <ListItem disableGutters>
          <PhoneIcon sx={{ color: grey[600], mr: 2 }} fontSize="small" />
          <LightText variant="body2">+3630 - 414-7026</LightText>
        </ListItem>

        <ListItem disableGutters>
          <MailIcon sx={{ color: grey[600], mr: 2 }} fontSize="small" />
          <LightText variant="body2">laszlo70@outlook.com</LightText>
        </ListItem>

        <ListItem disableGutters>
          <HomeIcon sx={{ color: grey[600], mr: 2 }} fontSize="small" />
          <LightText variant="body2">1201 Budapest Szondi utca 11</LightText>
        </ListItem>

        <Divider variant="fullWidth" sx={{ my: 2 }} />

        {/*          ---------------------             */}
      </SyledList>

      <SyledList>
        <SubHeader>Dj TataMoto</SubHeader>

        <ListItem disableGutters>
          <LightText variant="body2"> www.djtatamoto.hu</LightText>
        </ListItem>

        <ListItem disableGutters>
          <LightText variant="body2">Esküvő Dj - Rendezvény Dj</LightText>
        </ListItem>

        <ListItem disableGutters>
          <LightText variant="body2">Magyari László EV - DjTataMoto</LightText>
        </ListItem>
      </SyledList>

      <Typography variant="body2" color="divider" align="center" sx={{ pt: 8 }}>
        © {new Date().getFullYear()} - Minden jog fenntartva!
      </Typography>
    </Container>
  );
};

export default Footer;
