'use client';

import { Box, Typography, Stack, Container } from '@mui/material';

import ServiceCard from '@/components/ServiceCard';

const cards = [
  {
    titleText: 'Esküvő dj',
    bodyText: '„Hogy minden olyan legyen, amilyennek Ti megálmodtátok!”',
    imageUrl: '/wedding-image.jpg',
    pageLink: '/szolgaltatasok/eskuvodj',
  },
  {
    titleText: 'Céges rendezvény',
    bodyText:
      'Évzárók, csapatépítők - egy profi dj és a jó zene megalapozza a sikeres eseményt!',
    imageUrl: '/workplace-party-image.jpg',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
  {
    titleText: 'Egyéb rendezvények',
    bodyText: 'Születésnap? Főzőverseny? Falunap? Zenei aláfestéssel az igazi!',
    imageUrl: '/tata_rendezveny.jpg',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
];

const ServicesList = () => {
  const smallBoxHeight = 96;
  const bigBoxHeight = 500;

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        position: 'relative',
      }}
    >
      <Stack component="section" sx={{ pb: 0.5 }}>
        <Box
          sx={(theme) => ({
            height: `${smallBoxHeight}px`,
            backgroundColor: theme.palette.primary.main,
            pt: 2.5,
            position: 'relative',
            '&:after': {
              position: 'absolute',
              content: '""',
              inset: 0,
              bottom: '-1px',
              clipPath: `polygon(0 100%, 100% 100%, 0 calc(100% - 20px) )`,
              background: (theme) => theme.palette.background.default,
            },
          })}
        >
          <Typography variant="h4" align="center">
            Szolgáltatásaim
          </Typography>
        </Box>

        <Container
          maxWidth="xl"
          data-id="cards-container"
          sx={{ height: { md: '850px' }, py: { xs: 4, md: 8 } }}
        >
          <Stack spacing={{ xs: 2, sm: 2, md: 0 }} direction={{ md: 'row' }}>
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  overflow: 'hidden',
                  transform: {
                    md: `translateX(${
                      index === 0 ? '12%' : index === 2 ? '-12%' : '0'
                    }) translateY(${index * 20}%)`,
                  },
                  ':hover': {},
                }}
              >
                <ServiceCard
                  titleText={card.titleText}
                  bodyText={card.bodyText}
                  imageURL={card.imageUrl}
                  bigBoxHeight={bigBoxHeight}
                  pageLink={card.pageLink}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default ServicesList;
