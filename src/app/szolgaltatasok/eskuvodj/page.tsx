'use client';

import HeroSection from '@/components/HeroSection';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { styled } from '@mui/material';
import AccordionComponent from '@/components/pages/szolgaltatasok/Accordion';
import Reviews from '@/components/Reviews';
import ImageGallery from '@/components/ImageGallery';
import { weddingImages } from '@/shared/imageData';
import { howIWorkWeddingText, accordionWeddingData, whyMeWeddingText } from '@/shared/textData';
import weddingStockImg from '../../../../public/wedding_stock1.jpg';
import CtaButton from '@/components/CtaButton';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  opacity: 0.8,
  '&:before': {
    position: 'absolute',
    content: '""',
    inset: '-1px',
    clipPath: 'polygon(0 0, 100% 0, 0 15%)',
    backgroundColor: theme.palette.background.default,
  },
  '&:after': {
    position: 'absolute',
    content: '""',
    inset: '-1px',
    clipPath: 'polygon(0 100%, 100% 100%, 100% 85%)',
    backgroundColor: theme.palette.background.default,
  },
}));

const page = () => {
  return (
    <>
      <HeroSection backgroundURL="/hero_wedding.jpg" mobileHeight={50} desktopHeight={65} sx={{ '&:after': { opacity: 0.8 } }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Typography component="h1" variant="h1" color="secondary" sx={{ textAlign: 'center' }}>
            Esküvői DJ Szolgáltatások
          </Typography>
        </Box>
      </HeroSection>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
          background: {
            xs: `linear-gradient(to bottom, ${grey[800]}, ${grey[900]}, ${grey[800]}, ${grey[900]})`,
            md: 'none',
          },
        }}
      >
        <Container maxWidth="md" disableGutters sx={{ pt: { xs: 0, md: 12 } }}>
          <Grid container gap={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" color="text.primary">
                <Typography component="span" variant="h3" color="primary.light">
                  Gratulálok{' '}
                </Typography>
                friss eljegyzésedhez! Az esküvő az élet egyik legfontosabb napja, és a tökéletes zene elengedhetetlen ahhoz, hogy a hangulat valóban
                felejthetetlen legyen! Magam is házas ember lévén, pontosan tudom micsoda kihívás a Nagy Nap megszervezése.
              </Typography>
            </Grid>

            {/*------- Image big screen -------*/}
            <Grid size={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                src={weddingStockImg}
                alt="DJ szolgáltatás"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
          {/*------- Image small screen -------*/}
          <Box component="span" sx={{ display: { xs: 'block', md: 'none' }, mt: 2, mb: 2 }}>
            <Image
              src={weddingStockImg}
              alt="DJ szolgáltatás"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', md: 'auto' }, display: { xs: 'flex', md: 'block' }, justifyContent: { xs: 'center' } }}>
            <CtaButton />
          </Box>
        </Container>

        {/*------------ MIÉRT ENGEM ? -----------*/}

        <Box sx={{ pt: { xs: 10, md: 15 } }}>
          <Typography component="h2" variant="h3" color="primary.light" sx={{ pb: 5 }}>
            Miért válassz engem az esküvődre?
          </Typography>
          <List
            disablePadding
            sx={{
              '& .MuiListItem-root': {
                pb: { md: 3 },
              },
            }}
          >
            {whyMeWeddingText.map((item, index) => (
              <ListItem disableGutters sx={{ pt: 0, alignItems: 'flex-start' }} key={index}>
                <CircleIcon sx={{ width: '12px', mt: 0.5, mr: 2 }} fontSize="small" />
                <Typography variant="body1" color="text.primary">
                  <strong>{item.strongText}</strong>: {item.text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>

      <Reviews />

      <Box sx={{ display: 'flex', justifyContent: 'center', pb: { xs: 8, md: 8 } }}>
        <CtaButton />
      </Box>

      {/*------------ HOGYAN DOLGOZOM  -----------*/}

      <Container disableGutters maxWidth="lg">
        <StyledBox sx={{ mb: 10 }}>
          <Image src="/wedding_2.avif" alt="" width={500} height={500} priority={true} />
        </StyledBox>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ pb: { xs: 4, md: 6 } }}>
          <Typography component="h2" variant="h3" color="primary.light" sx={{ pb: 5 }}>
            Hogyan dolgozom?
          </Typography>
          <Box component="ol" sx={{ pl: 2.5 }}>
            <Stack spacing={{ xs: 2, md: 3 }}>
              {howIWorkWeddingText.map((item, index) => (
                <li key={index}>
                  <Box color="text.primary">
                    <Typography component="h3" variant="body1" sx={{ display: 'inline-block', fontWeight: 'bold', textDecoration: 'underline' }}>
                      {item.strongText}
                    </Typography>
                    : {item.text}
                  </Box>
                </li>
              ))}
            </Stack>
          </Box>
        </Box>
        {/*------------ GALERIA --------------*/}
        <Box sx={{ pb: { xs: 4, md: 12 }, backgroundColor: grey[900] }}>
          <ImageGallery images={weddingImages} />
        </Box>
      </Container>

      <Box sx={{ display: 'flex', justifyContent: 'center', pb: { xs: 8, md: 8 } }}>
        <CtaButton />
      </Box>

      {/*------------ GYIK -----------*/}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 15 }}>
        <Typography component="h2" variant="h4" color="primary.light" sx={{ pb: { xs: 4, md: 6 } }}>
          Gyakran ismételt kérdések
        </Typography>

        <Grid container spacing={{ xs: 0, md: 5 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <AccordionComponent data={accordionWeddingData} />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <StyledBox
              sx={{
                height: { xs: '250px', md: '350px' },
                borderRadius: { md: 1 },
                overflow: { md: 'hidden' },
                position: 'relative',
                zIndex: -0,
                mb: { xs: 3, md: 0 },
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                },
                '&:before': {
                  display: { md: 'none' },
                },
                '&:after': {
                  display: { md: 'none' },
                },
              }}
            >
              <Image src="/wedding_3.jpg" alt="" width={500} height={500} priority={true} />
            </StyledBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
