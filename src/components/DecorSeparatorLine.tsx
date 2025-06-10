import { Box } from '@mui/material';

const DecorSeparatorLine = () => {
  return (
    <Box
      maxWidth="lg"
      sx={{
        height: '80px',
        position: 'relative',
        marginInline: 'auto',
        filter: (theme) =>
          `drop-shadow(0 0 1px ${theme.palette.primary.light})`,
        '&:after': {
          position: 'absolute',
          content: '""',
          inset: 0,
          clipPath: 'polygon(0 70%, 100% 80%, 100% 20% , 0 0)',
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        },
      }}
    ></Box>
  );
};

export default DecorSeparatorLine;
