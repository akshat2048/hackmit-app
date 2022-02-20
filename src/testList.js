import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Expand= ()=>{
    return(
    <>
 <Typography>test </Typography>
    <Accordion>
        <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
            i love hackathon
        </AccordionSummary>
        <AccordionDetails>
            akshat
        </AccordionDetails>
        <AccordionDetails>
            akash
        </AccordionDetails>
    </Accordion>
    </>
    )
}

export default Expand;