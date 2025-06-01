import React from 'react';
import { Stack, Typography, Paper, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { grey } from '@mui/material/colors';

const cards = [
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quam ullam nostrum quidem dolorum ex id exercitationem temporibus, eaque ipsa! Aut emporibus, quo officiis recusandae facilis totam ullam nostrum!',
  },
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quam ullam nostrum quidem dolorum ex id exercitationem temporibus, eaque ipsa! Aut emporibus, quo officiis recusandae facilis totam ullam nostrum!',
  },
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quam ullam nostrum quidem dolorum ex id exercitationem temporibus, eaque ipsa! Aut emporibus, quo officiis recusandae facilis totam ullam nostrum!',
  },
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quam ullam nostrum quidem dolorum ex id exercitationem temporibus, eaque ipsa! Aut emporibus, quo officiis recusandae facilis totam ullam nostrum!',
  },
  {
    title: 'Jogtiszta szolgáltatás',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto quam ullam nostrum quidem dolorum ex id exercitationem temporibus, eaque ipsa! Aut emporibus, quo officiis recusandae facilis totam ullam nostrum!',
  },
];

const WhyMeList = () => {
  return (
    <Stack component="ul" spacing={3}>
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Miért érdemes engem választanod?
      </Typography>
      {cards.map((card, index) => (
        <ListItem key={index} title={card.title} body={card.body} />
      ))}
    </Stack>
  );
};

type Props = {
  title: string;
  body: string;
};

const ListItem = ({ title, body }: Props) => {
  return (
    <Paper elevation={24} sx={{ p: 3, backgroundColor: grey[800] }}>
      <Stack direction="row" spacing={2}>
        <Box>
          <CheckIcon color="secondary" fontSize="large" />
        </Box>
        <Box>
          <Typography variant="h5" color="text.secondary" sx={{ pb: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default WhyMeList;
