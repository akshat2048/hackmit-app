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
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="ND BIVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Arrythmia" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="IABP" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Impella" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="TandemHeart" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="CentriMag" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="RVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="CHM" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="ND LVAD" /></AccordionDetails>
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
                            <AccordionDetails align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="LVAD" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="TAH" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left" align="left" align="left"><FormControlLabel control={<Checkbox />} label="D BIVAD" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="VA ECMO 7D" /></AccordionDetails>
                            <FormGroup>
                            <Accordion>
                            <AccordionSummary expandicon={<IoIosAddCircleOutline />}>
                                <FormControlLabel control={<Checkbox />} label="">
                                    <Typography style={ {fontWeight: 600} }>
                                        LVAD
                                    </Typography>
                                </FormControlLabel>
                            </AccordionSummary>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="Hemolysis" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="PurmpThyrombosis" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="RightHeartFailure" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="DeviceInfection" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="AortInsuff" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="ICD Shock" />
                            </AccordionDetails>
                            <AccordionDetails align="left" align="left">
                                <FormControlLabel control={<Checkbox />} label="MucosalBleeding" />
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
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="D BIDVAD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="INO wo Hemo" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="CongHD" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="AmylHypReCard" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="HeartReTP" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="Waitlisted" /></AccordionDetails>
                            <AccordionDetails align="left" align="left"><FormControlLabel control={<Checkbox />} label="TP Candidate" /></AccordionDetails>
                            </Accordion>
                        </FormGroup>
                        <hr></hr>

                    </div>
                   

                </Stack>
            </div>
    )
}

export default Checklist;