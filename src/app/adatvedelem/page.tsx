import { Typography, Stack, Container } from '@mui/material';
import Link from 'next/link';

const page = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 25 } }}>
      <Stack alignItems="">
        <Typography
          component="h1"
          variant="h5"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Adatvédelmi Nyilatkozat
        </Typography>
        <Typography variant="body1" color="text.primary">
          Ez a weboldal nem gyűjt személyes adatokat a látogatóiról. Nem
          használunk cookie-kat (sütiket), helyi tárolást (localStorage),
          illetve nem ágyazunk be külső szolgáltatásokat (például elemző
          eszközöket, közösségi média modulokat, hirdetéseket).
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.primary"
          sx={{ mt: 2 }}
        >
          Szervernaplók
        </Typography>
        <Typography variant="body1" color="text.primary">
          A weboldal tárhelyszolgáltatója (Vercel) biztonsági és
          teljesítményfigyelési célból naplózhat technikai adatokat, például
          IP-címeket és böngészőinformációkat. Ezekhez az adatokhoz mi nem
          férünk hozzá, és azok feldolgozása a{' '}
          <Typography component="span" color="primary.light">
            <Link
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
            >
              Vercel Adatvédelmi Szabályzata szerint történik.
            </Link>
          </Typography>
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.primary"
          sx={{ mt: 2 }}
        >
          Google Search Console
        </Typography>
        <Typography variant="body1" color="text.primary">
          A weboldal teljesítményének követésére a Google Search Console
          szolgáltatást használjuk. Ez az eszköz nem gyűjt személyes adatokat a
          látogatóktól, kizárólag aggregált statisztikai adatokat biztosít
          számunkra.
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.primary"
          sx={{ mt: 2 }}
        >
          Harmadik félhez vezető hivatkozások
        </Typography>
        <Typography variant="body1" color="text.primary">
          Weboldalunk tartalmazhat hivatkozásokat harmadik fél által működtetett
          platformokra, például Facebook-oldalunkra vagy Google
          Cégem-profilunkra. Ezekre a linkekre kattintva a felhasználók
          elhagyják weboldalunkat, és a harmadik fél saját adatvédelmi
          szabályzata érvényesül. Nem vállalunk felelősséget ezekért a külső
          oldalakért, és javasoljuk, hogy olvassa el azok adatkezelési
          tájékoztatóit.
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.primary"
          sx={{ mt: 2 }}
        >
          Kapcsolat
        </Typography>
        <Typography variant="body1" color="text.primary">
          Ha bármilyen kérdése van az adatvédelmi nyilatkozattal kapcsolatban,
          vegye fel velünk a kapcsolatot az alábbi e-mail címen:
          laszlo70@outlook.com
        </Typography>
        <Typography
          component="h1"
          variant="body1"
          color="text.primary"
          sx={{ mt: 2 }}
        >
          Utolsó frissítés dátuma: 2025. június 16.
        </Typography>
      </Stack>
    </Container>
  );
};

export default page;
