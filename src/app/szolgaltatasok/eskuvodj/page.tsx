import React from 'react';
import HeroSection from '@/components/HeroSection';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';

const page = () => {
  return (
    <>
      <HeroSection
        backgroundURL="/hero_wedding.avif"
        mobileHeight={40}
      ></HeroSection>
      <Container maxWidth="lg" sx={{ py: 5 }}>
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
          <List>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '16px', mt: 0.5, mr: 2 }}
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
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '16px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Profi technika és megbízhatóság</strong>: A technikai
                eszközállományom sok év alatt fejlesztettem, hogy a hangzás
                kristálytiszta, a fények pedig hangulatosak és legyenek.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '16px', mt: 0.5, mr: 2 }}
                fontSize="small"
              />
              <Typography variant="body1" color="text.primary">
                <strong>Rugalmasság és kommunikáció</strong>: Fontosnak tartom a
                folyamatos kapcsolattartást. Szívesen válaszolok minden
                kérdésre, és rugalmasan alkalmazkodom az esetleges
                változásokhoz.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <CircleIcon
                sx={{ width: '16px', mt: 0.5, mr: 2 }}
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
    </>
  );
};

export default page;
