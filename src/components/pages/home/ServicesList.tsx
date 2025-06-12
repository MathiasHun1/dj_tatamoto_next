'use client';

import {
  Box,
  Typography,
  Stack,
  Grid,
  ListItem,
  Container,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { darken } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    bodyText:
      'Évzárók, csapatépítők - egy profi dj és a jó zene megalapozza a sikeres eseményt!',
    imageUrl: '/workplace-party-image.jpg',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
  {
    titleText: 'Egyéb rendezvények',
    bodyText: 'Születésnap? Főzőverseny? Falunap? Zenei aláfestéssel az igazi!',
    imageUrl: '/cook-festival-image.webp',
    pageLink: '/szolgaltatasok/rendezvenydj',
  },
];

const ServicesList = () => {
  const smallBoxHeight = 120;
  const bigBoxHeight = 500;

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 0, sm: 3 },
        pt: 10,
        position: 'relative',
      }}
    >
      <Stack component="section" sx={{ pb: 0.5 }}>
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

        <Grid container spacing={{ xs: 0, sm: 2, md: 4 }}>
          {cards.map((card, index) => (
            <Grid
              key={index}
              size={{ xs: 12, md: 6 }}
              offset={{
                md: index * 3,
              }}
              sx={{ overflow: 'hidden' }}
            >
              <ServiceCard
                titleText={card.titleText}
                bodyText={card.bodyText}
                imageURL={card.imageUrl}
                bigBoxHeight={bigBoxHeight}
                pageLink={card.pageLink}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

type ServiceCardProps = {
  direction?: 'normal' | 'reverse';
  bigBoxHeight: number;
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
          right: '-1px',
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
          <Box sx={{ maxWidth: '12ch', marginInline: 'auto' }}>
            <Typography
              variant="h5"
              color="text.secondary"
              align="left"
              sx={{ pb: 3 }}
            >
              {titleText}
            </Typography>
            <Typography variant="body1" align="left">
              {bodyText}
            </Typography>
            {pageLink && (
              <ListItem
                disablePadding
                component={Link}
                href={pageLink}
                sx={{
                  mt: 4,
                  gap: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover .MuiTypography-root, &:hover .MuiSvgIcon-root': {
                    color: (theme) => darken(theme.palette.secondary.main, 0.1),
                  },
                }}
              >
                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{ textDecoration: 'underline' }}
                >
                  Megnézem
                </Typography>
                <ArrowForwardIcon color="secondary" />
              </ListItem>
            )}
          </Box>
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
