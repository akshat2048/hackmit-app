import { createSlice } from '@reduxjs/toolkit'
import StatusAllocation from '../../StatusAllocation'

export const ChecklistSlice = createSlice({
  name: 'counter',
  initialState: {
    admitted: false,
    cardiogenicShock: false,
    primaryMechanicalCirculatorySupportDevices: {
        VA_ECMO: false,
        DischargeableVAD: false,
        NonDischargeableVAD: false,
        PercutaneousDevice: false,
        TAH: false,
        IABP: false
    },
    RequiresTimeSpentAtPreviousStatus: false,
    UseOfInotropes: false,
    VTachNotVFib: false,
    EligibleForExtension: false,
    status: 6
  },
  reducers: {
    CheckListChangeAdmitted: (state, action) => {
        state.admitted = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeCardiogenicShock: (state, action) => {
        state.cardiogenicShock = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeVA_ECMO: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.VA_ECMO = action.payload
        state.status = StatusAllocation(state)
    }, 
    CheckListChangeDischargeableVAD: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.DischargeableVAD = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeNonDischargeableVAD: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.NonDischargeableVAD = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangePercutaneousDevice: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.PercutaneousDevice = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeTAH: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.TAH = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeIABP: (state, action) => {
        state.primaryMechanicalCirculatorySupportDevices.IABP = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeRequiresTimeSpentAtPreviousStatus: (state, action) => {
        state.RequiresTimeSpentAtPreviousStatus = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeUseOfInotropes: (state, action) => {
        state.UseOfInotropes = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeVTachNotVFib: (state, action) => {
        state.VTachNotVFib = action.payload
        state.status = StatusAllocation(state)
    },
    CheckListChangeEligibleForExtension: (state, action) => {
        state.EligibleForExtension = action.payload
        state.status = StatusAllocation(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { CheckListChangeAdmitted, CheckListChangeCardiogenicShock, CheckListChangeDischargeableVAD, CheckListChangeEligibleForExtension, CheckListChangeIABP, CheckListChangeNonDischargeableVAD, CheckListChangePercutaneousDevice, CheckListChangeRequiresTimeSpentAtPreviousStatus, CheckListChangeTAH, CheckListChangeUseOfInotropes, CheckListChangeVA_ECMO, CheckListChangeVTachNotVFib } = ChecklistSlice.actions

export default ChecklistSlice.reducer