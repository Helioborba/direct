import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const AccordionModel = () => {
  // const [array, setArray] = useState();
  function fetchData() {
    const array = [...new Array(50)].map((val, index) => {
      return `index ${index}`
    })
    return array;
  }

  function render() {
    return fetchData().map( (val, index) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            key={index}
          >
            <Typography>{val}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              for
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
    })
  }

  return (
    <Box>
      {render()}
    </Box>
  );
}

export default AccordionModel;