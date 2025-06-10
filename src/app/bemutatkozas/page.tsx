'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Typography, Container, Box } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* <Box sx={{ pt: 15 }}></Box> */}
      <HeroSection
        backgroundURL="/hero2.jpg"
        mobileHeight={50}
        // sx={{ pt: 25, backgroundPosition: '0% 50%' }}
      ></HeroSection>

      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography variant="body1" color="text.primary">
            Üdvözöllek, Magyari László - Dj TataMoto - vagyok. A zene és a
            szórakoztatás mindig is közel állt hozzám, olyannyira, hogy fiatalon
            -munka mellett- a zeneakadémiára is beiratkoztam. 10 évvel ezelőtt
            kóstoltam bele a dj szakmába, akkor még hobbiként. Baráti esküvőkön,
            rendezvényeken zenéltem, ahol nemcsak értékes tapasztalatokra tettem
            szert, de rengeteg örömet is szereztem a közönségnek – és magamnak
            is. Idővel elkezdtek szállingózni nagyobb kaliberű, külsős
            megkeresések - esküvők, főzőverseny, motoros rendezvények, és még
            sorolhatnám. A puszta szenvedélyből szépen fokozatosan fordult a
            dolog a profizmus irányába, mire eljutottam a mai szintre:
            professzionális hang -és fénytechnika, több tízezer dal, sokezer
            keveréssel eltöltött óra. A zenélés és a zene szeretete egy kicsit
            sem kopott az évek során, így hivatásos útra léptem.
          </Typography>

          <Box sx={{ py: 5 }}>
            <Box
              sx={{
                width: '200px',
                borderRadius: 1,
                overflow: 'hidden',
                mt: 5,
                margin: 'auto',
              }}
            >
              <Image
                src="/portrait.webp"
                alt="kép dj tatamoto-ról"
                height={500}
                width={500}
              />
            </Box>
          </Box>

          <Typography variant="body1">
            A célom, hogy minden esemény emlékezetes legyen, hogy a közönségre
            rezonálva és akalomhoz leginkább passzoló zenei aláfestést rakjam
            össze, bármi is legyen a felkérés. Kifejezetten kis- és közepes
            méretű rendezvényeket vállalok, korrekt áron, személyre szabott
            zenei élménnyel. Legyen szó retróról, mai slágerekről vagy egyedi
            igényekről, otthonosan mozgok a különböző műfajokban! Ha fontos
            Neked a megbízhatóság, a rugalmasság és a zene iránti valódi
            lelkesedés, vedd fel velem a kapcsolatot közvetlenül, vagy küldj egy
            ajánlatkérő e-mailt.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
