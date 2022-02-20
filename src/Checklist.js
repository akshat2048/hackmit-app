import React from 'react';
import Collapse from '@mui/material/Collapse';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Paper, FormGroup, FormControlLabel, Checkbox, Grid, TextField, Typography, ToggleButtonGroup } from '@mui/material';
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
            <div>

                <Stack direction='row' spacing={12}>
                <div>
                        <hr></hr>
                        <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    Temporary
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="VA ECMO" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Non-dischargeable BIVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Arrythmia" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Intra-Aortic Balloon Pump" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Impella" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Tandem Heart" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="CentriMag" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="RVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Continuous Hemodynamic Monitoring" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Non-dischargeable LVAD" /></AccordionDetails>
                            </Accordion>
                        </FormGroup>
                        <hr>
                        </hr>
                    </div>
                    <div>
                    <hr></hr>

                        <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    Durable
                                </Typography>
                            </AccordionSummary>
                            {/* <AccordionDetails align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="LVAD" />
                            </AccordionDetails> */}
                            <AccordionDetails align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="Total Abdominal Hysterectomy" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="Dischargeable BIVAD" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="VA ECMO sustained 7 Days" /></AccordionDetails>
                            <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <FormControlLabel control={<Checkbox />} label="LVAD + Complication"></FormControlLabel>
                            </AccordionSummary>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Hemolysis" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Pump Thrombosis" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Right Heart Failure" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Device Infection" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Aortic Insufficiency" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="ICD Shock" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Mucosal Bleeding" />
                            </AccordionDetails>
                            </Accordion>
                        </FormGroup>
                            </Accordion>
                        </FormGroup>
                        <hr></hr>


                    </div>
                    <div>
                    <hr></hr>

                        <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    Other
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Dischargeable LVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Inotropes without Hemodynamic Monitoring" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Congenital Heart Disease" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="AmylHypReCard" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Cardiomyopathy" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="On Waitlist for Organ Transplant" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Candidate for Transplant" /></AccordionDetails>
                            </Accordion>
                        </FormGroup>
                        <hr></hr>

                    </div>
                   

                </Stack>
            </div>
    )
}

export default Checklist;