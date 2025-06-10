'use client';

import HeroSection from '@/components/HeroSection';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: '80px',
  position: 'relative',
  opacity: 0.8,
  '&:before': {
    position: 'absolute',
    content: '""',
    inset: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 0% 15%)',
    backgroundColor: theme.palette.background.default,
  },
  '&:after': {
    position: 'absolute',
    content: '""',
    inset: 0,
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 85%)',
    backgroundColor: theme.palette.background.default,
  },
}));

const howIWorkItems = [
  {
    strongText: 'Első kapcsolatfelvétel',
    text: 'Vedd fel velem a kapcsolatot telefonon vagy e-mailben, hogy megbeszéljük az esküvő dátumát és az alapvető elképzeléseket.',
  },
  {
    strongText: 'Személyes konzultáció',
    text: 'Találkozzunk egy kötetlen beszélgetésre, ahol részletesen átbeszéljük az igényeiteket, zenei preferenciáitokat, az esküvő menetét és minden egyéb részletet.',
  },
  {
    strongText: 'Ajánlatkészítés',
    text: ' Az egyeztetettek alapján elkészítem a személyre szabott, részletes árajánlatot.',
  },
  {
    strongText: 'Szerződéskötés',
    text: 'A megegyezés után szerződést kötünk a szolgáltatásról.',
  },
  {
    strongText: 'Zenei tervezés',
    text: ' Folyamatosan egyeztetünk a zenékkel kapcsolatban, és összeállítjuk a tökéletes playlistet.',
  },
  {
    strongText: 'A Nagy Nap',
    text: 'Megérkezem a helyszínre, felállítom a technikát, és gondoskodom róla, hogy minden zökkenőmentes legyen!',
  },
];

const page = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <HeroSection
        backgroundURL="/hero_wedding.avif"
        mobileHeight={40}
        sx={{ '&:after': { opacity: 0.4 } }}
      ></HeroSection>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
          background: (theme) =>
            `linear-gradient(to bottom, ${grey[800]}, ${theme.palette.background.default}, ${grey[800]}, ${theme.palette.background.default})`,
        }}
      >
        <Typography variant="body1" color="text.primary">
          <Typography component="span" variant="h4" color="primary.light">
            Gratulálok
          </Typography>{' '}
          friss eljegyzésedhez! Az esküvő az élet egyik legfontosabb napja, és a
          tökéletes zene elengedhetetlen ahhoz, hogy a hangulat valóban
          felejthetetlen legyen! Magam is házas ember lévén, pontosan tudom
          micsoda kihívás a Nagy Nap megszervezése.
        </Typography>

        <Box sx={{ pt: 10 }}>
          <Typography component="h2" variant="h4" color="primary.light">
            Miért válassz engem az esküvődre?
          </Typography>
          <List disablePadding sx={{ pt: 2 }}>
            <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '12px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Személyre szabott zenei élmény</strong>: Nem sablonokban
                gondolkodom. Mint minden ember, minden esküvő más, más az ízlés,
                más a vendégkör. A profi esküvő dj feladata, hogy egyedi
                ízlésetek és elképzeléseitek alapján állítsa össze a lejátszási
                listát. Éppen ezért, nem kínálok kész esküvő-csomagokat.
                Esküvő-dj ajánlatom a személyes megbeszélésünk alapján alakítom
                ki.
              </Typography>
            </ListItem>
            <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '12px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Profi technika és megbízhatóság</strong>: A technikai
                eszközállományom sok év alatt fejlesztettem, hogy a hangzás
                kristálytiszta, a fények pedig hangulatosak és legyenek.
              </Typography>
            </ListItem>
            <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '12px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Rugalmasság és kommunikáció</strong>: Fontosnak tartom a
                folyamatos kapcsolattartást. Szívesen válaszolok minden
                kérdésre, és rugalmasan alkalmazkodom az esetleges
                változásokhoz.
              </Typography>
            </ListItem>
            <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '12px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Stresszmentes tervezés</strong>: Leveszem a vállatokról
                a zenei tervezés terhét, így teljes mértékben a pillanatra
                koncentrálhattok.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>

      <StyledBox>
        <Image
          src="/wedding_2.avif"
          alt=""
          width={500}
          height={500}
          priority={true}
        />
      </StyledBox>

      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <Typography
            component="h2"
            variant="h4"
            color="primary.light"
            sx={{ pb: 5 }}
          >
            Hogyan dolgozom?
          </Typography>
          <Box component="ol" sx={{ pl: 2.5 }}>
            <Stack spacing={2}>
              {howIWorkItems.map((item, index) => (
                <li key={index}>
                  <Typography variant="body1" color="text.primary">
                    <strong>{item.strongText}</strong>: {item.text}
                  </Typography>
                </li>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default page;
