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
    question: 'feltöltés alatt..',
    answer: '-',
  },
  {
    question: 'feltöltés alatt..',
    answer: '-',
  },
  {
    question: 'feltöltés alatt..',
    answer: '-',
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
