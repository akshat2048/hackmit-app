import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Grid, TextField, Accordion, AccordionSummary, AccordionDetails, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { LVchangeWeight, LVchangeHeight, LVchangeGender } from './features/LV/LVSlice';
import { RVchangeAge, RVchangeGender, RVchangeHeight, RVchangeWeight } from './features/RV/RVSlice';
import { useState } from 'react';


function Calculator() {

    const dispatch = useDispatch();

    const [shouldError1, setShouldError1] = useState(false);
    const [shouldError2, setShouldError2] = useState(false);
    const [shouldError11, setShouldError11] = useState(false);
    const [shouldError22, setShouldError22] = useState(false);
    const [shouldBeDisabled, setShouldBeDisabled] = useState(true);
    const [alignment1, setAlignment1] = React.useState('male');
    const [alignment2, setAlignment2] = React.useState('male');
    const LVWeight = useSelector((state) => state.LV.weight);
    const LVHeight = useSelector((state) => state.LV.height);
    const LVGender = useSelector((state) => state.LV.gender);
    const RVWeight = useSelector((state) => state.RV.weight);
    const RVHeight = useSelector((state) => state.RV.height);
    const RVGender = useSelector((state) => state.RV.gender);
    const RVAge = useSelector((state) => state.RV.age);


    const handleChange = (event, newAlignment) => {
      setAlignment1(newAlignment);
      dispatch(LVchangeGender(newAlignment))
      checkDisabled()
    };

    const handleChange2 = (event, newAlignment) => {
        setAlignment2(newAlignment);
        dispatch(RVchangeGender(newAlignment))
        checkDisabled()
    };

    const checkDisabled = () => {
        console.log(LVWeight, LVHeight, LVGender, RVWeight, RVHeight, RVGender, RVAge)
        if (LVWeight !== 0 && LVHeight !== 0 && RVWeight !== 0 && RVHeight !== 0 && RVAge !== 0) {
            setShouldBeDisabled(false)
        }
    }

    const getLVMass = () => {
        var lv_storedV = 0.0
        if (LVGender === 'male') {
            lv_storedV = 8.25;
        } else {
            lv_storedV = 6.82;
        }

        var lv_equation = Math.round(lv_storedV * (Math.pow(LVHeight, 0.54)) * (Math.pow(LVWeight, 0.61)));
        // LV Mass equation
        // LV X * (Ht)^.54 * (Wt)^.61

        // convert double into integer

        return lv_equation;
    }

    const getRVMass = () => {
        var rv_storedV = 0.0
        if (RVGender === 'male') {
            rv_storedV = 11.25;
        } else {
            rv_storedV = 10.59;
        }

        var rv_equation = Math.round(rv_storedV * ((Math.pow(RVAge, -.32)) * (Math.pow(RVHeight, 1.135)) * (Math.pow(RVWeight, .315))));
        // RV Mass equation
        // RV = storedV * (age)^-.32 (Ht)^1.135 (Wt)^0.315
        return rv_equation;
    }


    return (
        <div>
            <Typography fontSize={48}>
                Calculate Heart Mass
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<IoIosAddCircleOutline />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>LV</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Grid container spacing={1} direction='row' justifyContent={'space-evenly'} paddingLeft={0.5} padding={0.5}>

                        <TextField error={shouldError1} id="LV_Weight" label='LV Weight' variant='outlined' onChange={(event) => {
                            if (/^[0-9]\d*(\.\d+)?$/.test(event.target.value)) {
                                dispatch(LVchangeWeight(event.target.value))
                                checkDisabled()
                            } else {
                                setShouldError1(true)
                            }
                        }} />
                        <TextField error={shouldError2} id="LV_Height" label='LV Height' variant='outlined' onChange={(event) => {
                            if (/^[0-9]\d*(\.\d+)?$/.test(event.target.value)) {
                                dispatch(LVchangeHeight(event.target.value))
                                checkDisabled()
                            } else {
                                setShouldError2(true)
                            }
                        }} />
                        <ToggleButtonGroup color='primary' value={alignment1} exclusive onChange={handleChange} >
                            <ToggleButton value="male">
                                Male
                            </ToggleButton>
                            <ToggleButton value="female">
                                Female
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<IoIosAddCircleOutline />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>RV</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Grid container spacing={1} direction='row' justifyContent={'space-evenly'} paddingLeft={0.5} padding={0.5}>

                        <TextField error={shouldError11} id="RV_Weight" label='RV Weight' variant='outlined' onChange={(event) => {
                            if (/^[0-9]\d*(\.\d+)?$/.test(event.target.value)) {
                                dispatch(RVchangeWeight(event.target.value))
                                checkDisabled()
                            } else {
                                setShouldError11(true)
                            }
                        }} />
                        <TextField error={shouldError22} id="RV_Height" label='RV Height' variant='outlined' onChange={(event) => {
                            if (/^[0-9]\d*(\.\d+)?$/.test(event.target.value)) {
                                dispatch(RVchangeHeight(event.target.value))
                                checkDisabled()
                            } else {
                                setShouldError22(true)
                            }
                        }} />
                        <TextField type='number' id="RV_Age" label='RV Age' variant='outlined' onChange={(event) => {
                            dispatch(RVchangeAge(event.target.value))
                            checkDisabled()
                        }} />
                        <ToggleButtonGroup color='primary' value={alignment2} exclusive onChange={handleChange2} >
                            <ToggleButton value="male">
                                Male
                            </ToggleButton>
                            <ToggleButton value="female">
                                Female
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled={shouldBeDisabled}>
                <AccordionSummary
                    expandIcon={<IoIosAddCircleOutline />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Results</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Grid container spacing={1} direction='row' justifyContent={'space-evenly'} paddingLeft={0.5} padding={0.5}>
                        <Typography color={'black'} variant={'button'}>
                            LV Mass: {getLVMass()} grams
                        </Typography>
                        <Typography variant={'button'}>
                            RV Mass: {getRVMass()} grams
                        </Typography>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Calculator;
