import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack, SxProps, Theme } from '@mui/material';
import Link from 'next/link';

const SocialIcons = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Stack direction="row" spacing={4} sx={{ width: 'fit-content', ...sx }}>
      <Link href="https://www.facebook.com/djtatamoto" target="_blank">
        <FacebookIcon
          fontSize="large"
          sx={{ color: (theme) => theme.palette.divider }}
        />
      </Link>
      <Link
        href="https://www.google.com/maps/place/Djtatamoto/@47.4303018,19.1163688,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd7eb9e549bd:0x9ac5b4c196c7bda4!8m2!3d47.4302982!4d19.1189437!16s%2Fg%2F11x842q0q3?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <GoogleIcon
          fontSize="large"
          sx={{ color: (theme) => theme.palette.divider }}
        />
      </Link>
    </Stack>
  );
};

export default SocialIcons;
