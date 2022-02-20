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

                <Stack direction='column' spacing={12}>
                    <div>
                        <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
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
                            </Accordion>
                        </FormGroup>
                        <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    LVAD
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControlLabel control={<Checkbox />} label="Hemolysis" />
                            </AccordionDetails>
                            <AccordionDetails>
                                <FormControlLabel control={<Checkbox />} label="PurmpThyrombosis" />
                            </AccordionDetails>
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
                            </Accordion>
                        </FormGroup>

                        <hr></hr>
                    </div>
                    <div>
                        <FormGroup>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
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
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    Other Support
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="D BIDVAD" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="INO wo Hemo" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="CongHD" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="AmylHypReCard" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="HeartReTP" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="Waitlisted" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="TP Candidate" /></AccordionDetails>
                        </FormGroup>
                    </div>
                    <div>
                        <hr></hr>
                        <FormGroup>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <Typography style={{ fontWeight: 600 }}>
                                    Temporary Support
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="VA ECMO" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="ND BIVAD" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="Arrythmia" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="IABP" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="Impella" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="TandemHeart" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="CentriMag" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="RVAD" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="CHM" /></AccordionDetails>
                            <AccordionDetails><FormControlLabel control={<Checkbox />} label="ND LVAD" /></AccordionDetails>
                        </FormGroup>
                        <hr>
                        </hr>
                    </div>

                </Stack>



            </div>
    )
}

export default Checklist;