'use client';

import {
  Container,
  Typography,
  List,
  ListSubheader,
  ListItem,
  Divider,
  Box,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material';
import { grey, deepPurple } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

import theme from '@/theme';
import DecorSeparatorLine from './DecorSeparatorLine';
import SocialIcons from './SocialIcons';

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
  // backgroundColor: theme.palette.background.default,
  backgroundColor: 'transparent',
}));

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pb: 5,
        backgroundImage: {
          xs: `radial-gradient(circle at 0% 200%, ${deepPurple[900]} 25%, ${theme.palette.background.default} 80%)`,
          md: `radial-gradient(circle at 30% 300%, ${deepPurple[900]} 25%, ${theme.palette.background.default} 80%)`,
        },
      }}
    >
      <DecorSeparatorLine />
      <Container maxWidth="lg">
        {/*----------- CONTACTS --------------*/}
        <Stack spacing={5} alignItems="center">
          <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-around' }}>
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
                <LightText variant="body2">
                  1201 Budapest Szondi utca 11
                </LightText>
              </ListItem>
              <Divider
                variant="fullWidth"
                sx={{ my: 2, display: { md: 'none' } }}
              />
            </SyledList>
            {/*---------    PARTNERS   ------------*/}
            <SyledList>
              <SubHeader>PARTNEREIM</SubHeader>
              <ListItem
                disableGutters
                component="a"
                href="https://www.facebook.com/ballaszilardceremoniamester"
                target="_blank"
              >
                <LightText
                  variant="body2"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Balla Szilárd - ceremóniamester
                </LightText>
              </ListItem>
              <ListItem
                disableGutters
                component="a"
                href="https://www.borostyanvendeghaz-matraderecske.hu/"
                target="_blank"
              >
                <LightText
                  variant="body2"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Borostyán vendégház - Mátraderecske
                </LightText>
              </ListItem>
              <ListItem
                disableGutters
                component="a"
                href="https://masszazsbarlang.hu/"
                target="_blank"
              >
                <LightText
                  variant="body2"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Andi masszázs - masszázsbarlang
                </LightText>
              </ListItem>
              <Divider
                variant="fullWidth"
                sx={{ my: 2, display: { md: 'none' } }}
              />
            </SyledList>
            {/*---------------   INFO   -------------*/}
            <SyledList>
              <SubHeader>Dj TataMoto</SubHeader>
              <ListItem disableGutters>
                <LightText variant="body2">www.djtatamoto.hu</LightText>
              </ListItem>
              <ListItem disableGutters>
                <LightText variant="body2">Esküvő Dj - Rendezvény Dj</LightText>
              </ListItem>
              <ListItem disableGutters>
                <LightText variant="body2">
                  Magyari László EV - DjTataMoto
                </LightText>
              </ListItem>
            </SyledList>
          </Box>
          <SocialIcons />
          <Typography variant="body2" color="divider" align="center" sx={{}}>
            © {new Date().getFullYear()} - Minden jog fenntartva!
          </Typography>
          <Link href="/adatvedelem" target="_blank">
            <Typography variant="body2" color="divider" align="center" sx={{}}>
              Adatvédelmi Nyilatkozat
            </Typography>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
