import { Box, Typography, Paper, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type ServiceCardProps = {
  direction?: 'normal' | 'reverse';
  bigBoxHeight: number;
  titleText: string;
  bodyText: string;
  imageURL: string;
  pageLink?: string;
};

const gradientColor = 'hsla(259deg, 26%, 11%)';

const ContainingBox = styled(Paper)({
  position: 'relative',
  height: '500px',
  overflow: 'hidden',
});

const ImageSection = styled(Box)({
  position: 'absolute',
  inset: 0,
  left: '30%',
});

const Overlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundImage: `linear-gradient(to right, ${gradientColor} 30%, transparent)`,
});

const TextSection = styled(Box)({
  position: 'absolute',
  inset: 0,
  right: '40%',
  backdropFilter: 'blur(5px)',
  padding: '32px',
  paddingBottom: '64px',
  display: 'flex',
  alignItems: 'center',
});

const ServiceCard = ({ titleText, bodyText, imageURL, pageLink }: ServiceCardProps) => {
  return (
    <ContainingBox sx={{ borderRadius: { md: '16px' } }}>
      <ImageSection>
        <Image src={imageURL} alt="" width={300} height={500} style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </ImageSection>
      <Overlay />
      <TextSection data-id="card-text-container">
        <Box
          sx={{
            maxWidth: '16ch',
            marginInline: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Typography component="h3" variant="h5" color="text.secondary" align="left" sx={{ pb: 3 }}>
              {titleText}
            </Typography>
            <Typography variant="body1" align="left">
              {bodyText}
            </Typography>
          </Box>
          {pageLink && (
            <Box className="btn btn-secondary mt-4" sx={{ alignSelf: 'start' }}>
              <Link href={pageLink}>Megnézem</Link>
            </Box>
          )}
        </Box>
      </TextSection>
    </ContainingBox>
  );
};
export default ServiceCard;
