import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const EventCard = ({
  imageSource,
  cardText,
}: {
  imageSource: string;
  cardText: string;
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: '70%',
          md: '200px',
        },
        '&:after': {
          position: 'absolute',
          inset: 0,
          content: '""',
          background:
            'linear-gradient(to bottom, black -30%, hsla(0, 0% ,0% , 0.2) 70%, transparent)',
        },
      }}
    >
      <Image src={imageSource} alt="" width={500} height={800} />
      <Typography
        variant="h5"
        color="text.primary"
        sx={{
          p: 1,
          letterSpacing: '5px',
          position: 'absolute',
          borderRadius: '12px',
          top: { xs: '10%' },
          left: '-10%',
          zIndex: 100,
          transform: 'rotate(10deg)',
          // boxShadow: '0 0 15px 10px hsla(0, 0%, 100%, 0.3)',
          filter: 'drop-shadow(10px 10px 20px  hsla(0, 0%, 100%, 0.8))',
        }}
      >
        {cardText}
      </Typography>
    </Box>
  );
};

export default EventCard;
