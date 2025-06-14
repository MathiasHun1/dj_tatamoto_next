import {
  Box,
  Typography,
  ListItem,
  darken,
  Paper,
  styled,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Theme } from '@mui/material';
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
  display: 'flex',
  alignItems: 'center',
});

const ServiceCard = ({
  titleText,
  bodyText,
  imageURL,
  pageLink,
}: ServiceCardProps) => {
  return (
    <ContainingBox sx={{ borderRadius: { md: '16px' } }}>
      <ImageSection>
        <Image
          src={imageURL}
          alt=""
          width={300}
          height={500}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </ImageSection>
      <Overlay />
      <TextSection data-id="card-text-container">
        <Box
          sx={{
            maxWidth: '12ch',
            marginInline: 'auto',
          }}
        >
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
                  color: (theme: Theme) =>
                    darken(theme.palette.secondary.main, 0.1),
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
      </TextSection>
    </ContainingBox>
  );
};
export default ServiceCard;
