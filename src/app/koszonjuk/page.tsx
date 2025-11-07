'use client';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const formSuccess = sessionStorage.getItem('formSuccess');

    if (!formSuccess) {
      router.push('/');
    } else {
      setAllowed(true);
      sessionStorage.removeItem('formSuccess');
    }
  }, [router]);

  if (!allowed) {
    return null;
  }

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography component="h1" variant="h3" color="secondary">
        Köszönöm érdeklődésed!
      </Typography>
      <Typography variant="body1">Üzeneted sikeresen elküldésre került, amint tudom felveszem veled a kapcsolatot!</Typography>

      <div className="btn btn-primary bg-secondary border-0 text-black mt-5">
        <Link href="/">Vissza a főoldalra</Link>
      </div>
    </Box>
  );
};

export default ThankYouPage;
