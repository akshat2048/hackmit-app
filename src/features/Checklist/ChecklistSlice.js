import { createSlice } from '@reduxjs/toolkit'
import StatusAllocatorWrapper from '../../StatusAllocatorWrapper';

export const ChecklistSlice = createSlice({
    name: 'counter',
    initialState: {
        //define support type
        MSCD_support: '',
        status: 6,

        //TEMPORARY SUPPORT
        VA_ECMO: false,
        ND_BIVAD: false,
        Arrythmia: false,
        IABP: false,
        Impella: false,
        TandemHeart: false,
        CentriMag: false,
        RVAD: false,
        ND_LVAD: false,
        CHM: false,

        //DURABLE SUPPORT
        LVAD: false,
        TAH: false,
        D_BIVAD: false,
        VA_ECMO_7D: false,

        //LVAD Subcategories
        Hemolysis: false,
        PurmpThrombosis: false,
        RightHeartFailure: false,
        DeviceInfection: false,
        AortInsuff: false,
        ICD_Shock: false,
        MucosalBleeding: false,

        //OTHER SUPPORT
        D_LVAD: false,
        INO_wo_Hemo: false,
        CongHD: false,
        AmylHypReCard: false,
        HeartReTP: false,
        Waitlisted: false,
        TP_Candidate: false

    },
    reducers: {
        CheckListChangeStatus(state, action) {
            state.status = action.payload;
            state.status = StatusAllocatorWrapper(state);
        },
        CheckListChangeMSCD_support(state, action) {
            state.MSCD_support = action.payload;
            state.status = StatusAllocatorWrapper.getStatus(state);
        },
        CheckListChangeVA_ECMO: (state, action) => {
            state.VA_ECMO = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeND_BIVAD: (state, action) => {
            state.ND_BIVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeArrythmia: (state, action) => {
            state.Arrythmia = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeIABP: (state, action) => {
            state.IABP = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeImpella: (state, action) => {
            state.Impella = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeTandemHeart: (state, action) => {
            state.TandemHeart = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeCentriMag: (state, action) => {
            state.CentriMag = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeRVAD: (state, action) => {
            state.RVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeND_LVAD: (state, action) => {
            state.ND_LVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeCHM: (state, action) => {
            state.CHM = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeLVAD: (state, action) => {
            state.LVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeTAH: (state, action) => {
            state.TAH = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeD_BIVAD: (state, action) => {
            state.D_BIVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeVA_ECMO_7D: (state, action) => {
            state.VA_ECMO_7D = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeHemolysis: (state, action) => {
            state.Hemolysis = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangePurmpThrombosis: (state, action) => {
            state.PurmpThrombosis = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeRightHeartFailure: (state, action) => {
            state.RightHeartFailure = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeDeviceInfection: (state, action) => {
            state.DeviceInfection = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeAortInsuff: (state, action) => {
            state.AortInsuff = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeICD_Shock: (state, action) => {
            state.ICD_Shock = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeMucosalBleeding: (state, action) => {
            state.MucosalBleeding = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeD_LVAD: (state, action) => {
            state.D_LVAD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeINO_wo_Hemo: (state, action) => {
            state.INO_wo_Hemo = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeCongHD: (state, action) => {
            state.CongHD = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeAmylHypReCard: (state, action) => {
            state.AmylHypReCard = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeHeartReTP: (state, action) => {
            state.HeartReTP = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeWaitlisted: (state, action) => {
            state.Waitlisted = action.payload
            state.status = StatusAllocatorWrapper(state)
        },
        CheckListChangeTP_Candidate: (state, action) => {
            state.TP_Candidate = action.payload
            state.status = StatusAllocatorWrapper(state)
        }
    },
})

// Action creators are generated for each case reducer function
//export const { CheckListChangeMSCD_support, CheckListChangeVA_ECMO, } = ChecklistSlice.actions

export const { CheckListChangeStatus, CheckListChangeMCSD_support, CheckListChangeVA_ECMO, CheckListChangeND_BIVAD, CheckListChangeArrythmia, CheckListChangeIABP, CheckListChangeImpella, CheckListChangeTandemHeart, CheckListChangeCentriMag, CheckListChangeRVAD, CheckListChangeND_LVAD, CheckListChangeCHM, CheckListChangeLVAD, CheckListChangeTAH, CheckListChangeD_BIVAD, CheckListChangeVA_ECMO_7D, CheckListChangeHemolysis, CheckListChangePurmpThrombosis, CheckListChangeRightHeartFailure, CheckListChangeDeviceInfection, CheckListChangeAortInsuff, CheckListChangeICD_Shock, CheckListChangeMucosalBleeding, CheckListChangeD_LVAD, CheckListChangeINO_wo_Hemo, CheckListChangeCongHD, CheckListChangeAmylHypReCard, CheckListChangeHeartReTP, CheckListChangeWaitlisted, CheckListChangeTP_Candidate } = ChecklistSlice.actions

export default ChecklistSlice.reducer