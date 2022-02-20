import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Stack, Paper, FormGroup, FormControlLabel, Checkbox, Grid, TextField, Accordion, AccordionSummary, AccordionDetails, Typography, ToggleButtonGroup, ToggleButton, item } from '@mui/material';
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
            <Stack direction='row' spacing={2}>
                <div>
                    <FormGroup>
                        <Typography>
                            MSCD Support
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="Admitted" />
                        <FormControlLabel control={<Checkbox />} label="Outpatient" />
                    </FormGroup>
                    <hr></hr>
                    <FormGroup>
                        <Typography>
                            Temporary Support Subcategories
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="VA ECMO" />
                        <FormControlLabel control={<Checkbox />} label="ND BIVAD" />
                        <FormControlLabel control={<Checkbox />} label="Arrythmia" />
                        <FormControlLabel control={<Checkbox />} label="IABP" />
                        <FormControlLabel control={<Checkbox />} label="Impella" />
                        <FormControlLabel control={<Checkbox />} label="TandemHeart" />
                        <FormControlLabel control={<Checkbox />} label="CentriMag" />
                        <FormControlLabel control={<Checkbox />} label="RVAD" />
                        <FormControlLabel control={<Checkbox />} label="CHM" />
                        <FormControlLabel control={<Checkbox />} label="ND LVAD" />
                    </FormGroup>
                    <hr>
                    </hr>
                </div>
                <div>
                    <FormGroup>
                        <Typography>
                            Durable Support
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="LVAD" />
                        <FormControlLabel control={<Checkbox />} label="TAH" />
                        <FormControlLabel control={<Checkbox />} label="D BIVAD" />
                        <FormControlLabel control={<Checkbox />} label="VA ECMO 7D" />

                    </FormGroup>
                    <FormGroup>
                        <Typography>
                            LVAD Subcategories
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="Hemolysis" />
                        <FormControlLabel control={<Checkbox />} label="PurmpThyrombosis" />
                        <FormControlLabel control={<Checkbox />} label="RightHeartFailure" />
                        <FormControlLabel control={<Checkbox />} label="DeviceInfection" />
                        <FormControlLabel control={<Checkbox />} label="AortInsuff" />
                        <FormControlLabel control={<Checkbox />} label="ICD Shock" />
                        <FormControlLabel control={<Checkbox />} label="MucosalBleeding" />

                    </FormGroup>
                    <FormGroup>
                        <Typography>
                            Other Support
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="D BIDVAD" />
                        <FormControlLabel control={<Checkbox />} label="INO wo Hemo" />
                        <FormControlLabel control={<Checkbox />} label="CongHD" />
                        <FormControlLabel control={<Checkbox />} label="AmylHypReCard" />
                        <FormControlLabel control={<Checkbox />} label="HeartReTP" />
                        <FormControlLabel control={<Checkbox />} label="Waitlisted" />
                        <FormControlLabel control={<Checkbox />} label="TP Candidate" />
                    </FormGroup>
                    <hr></hr>
                </div>
            </Stack>



        </div>
    )
}

export default Checklist;