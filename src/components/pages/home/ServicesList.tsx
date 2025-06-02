'use client';

import { Box, Typography, Stack, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';

const cards = [
  {
    titleText: 'Esküvő dj',
    bodyText: '„Hogy minden olyan legyen, amilyennek Ti megálmodtátok!”',
    imageUrl: '/wedding-image.jpg',
  },
  {
    titleText: 'Céges rendezvény',
    bodyText: '„Hogy minden olyan legyen, amilyennek Ti megálmodtátok!”',
    imageUrl: '/workplace-party-image.jpg',
  },
  {
    titleText: 'Kültéri rendezvény',
    bodyText: 'Főzőverseny? Falunap? Zenei aláfestéssel az iagaz!',
    imageUrl: '/cook-festival-image.webp',
  },
];

const ServicesList = () => {
  const smallBoxHeight = 120;
  const bigBoxHeight = 400;
  const slopeValue = 48;

  return (
    <Stack>
      <Box
        sx={(theme) => ({
          height: `${smallBoxHeight}px`,
          backgroundColor: theme.palette.primary.main,
          mt: 10,
          pt: 2,
          clipPath: `polygon(0 0, 100% 0, 100% ${
            smallBoxHeight - slopeValue
          }px, 50% 100%, 0 60%)`,
        })}
      >
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          Szolgáltatásaim
        </Typography>
      </Box>

      {cards.map((card, index) => (
        <ServiceCard
          key={index}
          // direction={`${
          //   cards.length % (index + 1) === 0 ? 'reverse' : 'normal'
          // }`}
          titleText={card.titleText}
          bodyText={card.bodyText}
          imageURL={card.imageUrl}
          bigBoxHeight={bigBoxHeight}
          slopeValue={slopeValue}
        />
      ))}
    </Stack>
  );
};

type CardProps = {
  direction?: 'normal' | 'reverse';
  bigBoxHeight: number;
  slopeValue: number;
  titleText: string;
  bodyText: string;
  imageURL: string;
};

const ServiceCard = ({
  direction = 'normal',
  bigBoxHeight,
  slopeValue,
  titleText,
  bodyText,
  imageURL,
}: CardProps) => {
  return (
    <Box
      sx={{
        height: `${bigBoxHeight}px`,
        clipPath: `polygon(0 0, 50% 48px ,100% 0, 100% ${
          bigBoxHeight - slopeValue
        }px, 50% 100%, 0 ${bigBoxHeight - slopeValue}px)`,
        backgroundColor: grey[800],
      }}
    >
      <Grid
        container
        sx={{
          height: '100%',
          flexDirection: `${direction === 'reverse' ? 'row-reverse' : ''}`,
        }}
      >
        <Grid size={6} sx={{ pt: 10, px: 2 }}>
          <Typography
            variant="h5"
            color="secondary"
            sx={{ textAlign: 'center', pb: 3 }}
          >
            {titleText}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            {bodyText}
          </Typography>
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
