import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  {
    question: 'Játszol mulatós zenét?',
    answer:
      'Nekem a ti kívánságotok az első, ha azt szeretnétek, mulatós zenét is szívesen játszom',
  },
  {
    question: 'A fénytechikának / füstgépnek van e külön díja?',
    answer: 'Nincs, az ár tartalmazza a komplett felszerelést',
  },
  {
    question: 'Vendégmikrofon van e?',
    answer: 'Igen, vezeték nélküli mikrofonnal tudok szolgálni',
  },
  {
    question: 'Ceremónia hangosítását meg tudod oldani?',
    answer: 'Természetesen!',
  },
];

const AccordionComponent = () => {
  return (
    <Paper>
      {data.map((d, index) => (
        <Accordion key={index} sx={{ background: 'inherit' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          >
            <Typography component="span" variant="body1" color="text.primary">
              {d.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.primary"></Typography>
            {d.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default AccordionComponent;
