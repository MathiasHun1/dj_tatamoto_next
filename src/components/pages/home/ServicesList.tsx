'use client';

import { Box, Typography, Stack, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    titleText: 'Esküvő dj',
    bodyText: '„Hogy minden olyan legyen, amilyennek Ti megálmodtátok!”',
    imageUrl: '/wedding-image.jpg',
    pageLink: '/szolgaltatasok/eskuvodj',
  },
  {
    titleText: 'Céges rendezvény',
    bodyText: '„Hogy minden olyan legyen, amilyennek Ti megálmodtátok!”',
    imageUrl: '/workplace-party-image.jpg',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
  {
    titleText: 'Kültéri rendezvény',
    bodyText: 'Főzőverseny? Falunap? Zenei aláfestéssel az igazi!',
    imageUrl: '/cook-festival-image.webp',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
];

const ServicesList = () => {
  const smallBoxHeight = 120;
  const bigBoxHeight = 400;
  const slopeValue = 20; //adjust decoration steepness with this value!

  return (
    <Stack component="section" sx={{}}>
      <Box
        sx={(theme) => ({
          height: `${smallBoxHeight}px`,
          backgroundColor: theme.palette.primary.main,
          pt: 2,
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: '""',
            inset: 0,
            clipPath: `polygon(0 100%, 100% 100%, 0 calc(100% - 20px) )`,
            background: (theme) => theme.palette.background.default,
          },
        })}
      >
        <Typography variant="h4" align="center">
          Szolgáltatásaim
        </Typography>
      </Box>

      {cards.map((card, index) => (
        <ServiceCard
          key={index}
          titleText={card.titleText}
          bodyText={card.bodyText}
          imageURL={card.imageUrl}
          bigBoxHeight={bigBoxHeight}
          slopeValue={slopeValue}
          pageLink={card.pageLink}
        />
      ))}
    </Stack>
  );
};

type ServiceCardProps = {
  direction?: 'normal' | 'reverse';
  bigBoxHeight: number;
  slopeValue: number;
  titleText: string;
  bodyText: string;
  imageURL: string;
  pageLink?: string;
};

const ServiceCard = ({
  direction = 'normal',
  bigBoxHeight,
  titleText,
  bodyText,
  imageURL,
  pageLink,
}: ServiceCardProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: `${bigBoxHeight}px`,

        '&:before': {
          position: 'absolute',
          content: '""',
          inset: 0,
          bottom: '-1px',
          top: '-1px',
          background: (theme) => theme.palette.background.default,
          clipPath: `polygon(0 0, 100% 0, 100% 20px )`,
          zIndex: 100,
        },
        '&:after': {
          position: 'absolute',
          content: '""',
          inset: 0,
          bottom: '-1px',
          top: '-1px',
          background: (theme) => theme.palette.background.default,
          clipPath: `polygon(0 100%, 100% 100%, 0 calc(100% - 20px))`,
        },
      }}
    >
      <Grid
        container
        sx={{
          height: '100%',
          flexDirection: `${direction === 'reverse' ? 'row-reverse' : ''}`,
        }}
      >
        <Grid
          size={6}
          sx={{
            pt: 10,
            px: 2,
            textAlign: 'center',
            backgroundColor: grey[800],
          }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
            sx={{ pb: 3 }}
          >
            {titleText}
          </Typography>
          <Typography variant="body1" align="center">
            {bodyText}
          </Typography>
          {pageLink && (
            <Typography
              component={Link}
              href={pageLink}
              variant="body1"
              color="secondary"
              sx={{ textDecoration: 'underline', pt: 3 }}
            >
              Megnézem --
            </Typography>
          )}
        </Grid>

        <Grid size={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={imageURL}
              alt=""
              width={300}
              height={500}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesList;
