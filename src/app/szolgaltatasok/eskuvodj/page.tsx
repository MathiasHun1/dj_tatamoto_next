'use client';

import HeroSection from '@/components/HeroSection';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
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

const page = () => {
  return (
    <Box>
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
          <List sx={{ pt: 2 }}>
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

      <StyledBox>
        <Image
          src="/wedding_2.avif"
          alt=""
          width={500}
          height={500}
          priority={true}
        />
      </StyledBox>
    </Box>
  );
};

export default page;
