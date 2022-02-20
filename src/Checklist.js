import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { IoIosAddCircleOutline } from 'react-icons/io';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Stack, Paper, FormGroup, FormControlLabel, Checkbox, Grid, TextField, AccordionSummary, Typography, ToggleButtonGroup, ToggleButton, item } from '@mui/material';
import { styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { LVchangeWeight, LVchangeHeight, LVchangeGender } from './features/LV/LVSlice';
import { RVchangeAge, RVchangeGender, RVchangeHeight, RVchangeWeight } from './features/RV/RVSlice';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Checklist() {

    return (
        <Accordion>
        <div>
            
            <Stack direction='row' spacing={2}>
            <div>                
                    <FormGroup>               
                        <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
                            <Typography style={{ fontWeight: 600 }}>
                                Durable Support
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="LVAD" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="TAH" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="D BIVAD" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="VA ECMO 7D" />
                        </AccordionDetails>
                    </FormGroup>
                    <FormGroup>
                    <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
                            <Typography style={{ fontWeight: 600 }}>
                                LVAD
                            </Typography>
                        </AccordionSummary>
                        <AccordianDetails>
                            <FormControlLabel control={<Checkbox />} label="Hemolysis" />
                        </AccordianDetails>
                        <AccordianDetails>
                            <FormControlLabel control={<Checkbox />} label="PurmpThyrombosis" />
                        </AccordianDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="RightHeartFailure" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="DeviceInfection" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="AortInsuff" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="ICD Shock" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="MucosalBleeding" />
                        </AccordionDetails>
                    </FormGroup>
                    
                    <hr></hr>
                </div>
                <div>
                    <FormGroup>
                    <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
                            <Typography style={{ fontWeight: 600 }}>
                                MCSD Support
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="Admitted" />
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControlLabel control={<Checkbox />} label="Outpatient" />
                        </AccordionDetails>
                    </FormGroup>
                    <FormGroup>
                    <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
                            <Typography style={{ fontWeight: 600 }}>
                                Other Support
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails><FormControlLabel control={<Checkbox />} label="D BIDVAD" /></AccordionDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="INO wo Hemo" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="CongHD" /></AccordianDetails>
                        <AccordionDetails><FormControlLabel control={<Checkbox />} label="AmylHypReCard" /></AccordionDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="HeartReTP" /></AccordianDetails>
                        <AccordionDetails><FormControlLabel control={<Checkbox />} label="Waitlisted" /></AccordionDetails>
                        <AccordionDetails><FormControlLabel control={<Checkbox />} label="TP Candidate" /></AccordionDetails>
                    </FormGroup>
                </div>
                <div>
                    <hr></hr>
                    <FormGroup>
                    <AccordionSummary expandicon= {<ExpandMoreIcon/>}>
                            <Typography style={{ fontWeight: 600 }}>
                                Temporary Support
                            </Typography>
                        </AccordionSummary>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="VA ECMO" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="ND BIVAD" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="Arrythmia" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="IABP" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="Impella" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="TandemHeart" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="CentriMag" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="RVAD" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="CHM" /></AccordianDetails>
                        <AccordianDetails><FormControlLabel control={<Checkbox />} label="ND LVAD" /></AccordianDetails>
                    </FormGroup>
                    <hr>
                    </hr>
                </div>
                
            </Stack>



        </div>
    </Accordion>
    )
}

export default Checklist;