import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const DecorLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '200px',
        clipPath: 'polygon(0 100%, 100% 100%, 30% 80%)',
        backgroundColor: grey[900],
        zIndex: 3,
      }}
    ></Box>
  );
};

export default DecorLine;
