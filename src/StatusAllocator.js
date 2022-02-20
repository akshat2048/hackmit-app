
//define support type
let MSCD_support = '';



//TEMPORARY SUPPORT
let VA_ECMO = false; // 1
let ND_BIVAD = false; // 1
let Arrythmia = false; // 1
let IABP = false; // 2
let Impella = false; // 2
let TandemHeart = false; // 2
let CentriMag = false; // 2
let RVAD = false; // 2
let ND_LVAD = false; // 2
let CHM = false; // 2




//DURABLE SUPPORT
let LVAD = false;
let TAH = false;
let D_BIVAD = false;
let VA_ECMO_7D = false;

//LVAD Subcategories
let Hemolysis = false;
let PurmpThrombosis = false;
let RightHeartFailure = false;
let DeviceInfection = false;
let AortInsuff = false;
let ICD_Shock = false;
let MucosalBleeding = false;



//OTHER SUPPORT
let D_LVAD = false;
let INO_wo_Hemo = false;
let CongHD = false;
let AmylHypReCard = false;
let HeartReTP = false;
let Waitlisted = false;
let TP_Candidate = false;




function getStatus(MSCD_support, VA_ECMO, ND_BIVAD, Arrythmia, IABP, Impella, TandemHeart, CentriMag, RVAD, ND_LVAD, CHM, LVAD, TAH, D_BIVAD, VA_ECMO_7D, Hemolysis, PurmpThrombosis, RightHeartFailure, DeviceInfection, AortInsuff, ICD_Shock, MucosalBleeding, D_LVAD, INO_wo_Hemo, CongHD, AmylHypReCard, HeartReTP, Waitlisted, TP_Candidate) {

    let status = 0;

    switch(MSCD_support) {

        case('temporary'):
        // Status 1-2 classification in temporary support
        // VA-ECMO, Biventricular SD, Arrythmia, etc.

            switch(VA_ECMO) {
                case true:
                    if(VA_ECMO_7D) {status = 3}
                    else {status = 1}
                
                case false:
                    break;
            }

            switch(ND_BIVAD) {
                case true:
                    return status = 1;

                case false:
                    break;
            }

            switch(Arrythmia) {
                case true:
                    return status = 1;
                    
                case false:
                    break;
            }

            switch(IABP) {
                case true:
                    return status = 2;
                
                case false:
                    break;
            }

            switch(Impella) {
                case true:
                    return status = 2;

                case false:
                    break;
            }

            switch(TandemHeart) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }

            switch(CentriMag) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }

            switch(RVAD) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }

            switch(ND_LVAD) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }

            switch(CHM) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }


        case('durable'):
        //Status 3 classification

            switch(LVAD) {
                case true:
                    case(Hemolysis):
                        return status = 3;
                    case (PurmpThrombosis):
                        return status = 3;
                    case (RightHeartFailure):
                        return status = 3;
                    case (DeviceInfection):
                        return status = 3;
                    case (AortInsuff):
                        return status = 3;
                    case (ICD_Shock):
                        return status = 3;
                    case (MucosalBleeding):
                        return status = 3;           
                
                case false:
                    break; 
            }

            switch(TAH) {
                case true:
                    return status = 3;
                    
                case false:
                    break;
            }

            switch(D_BIVAD) {
                case true:
                    return status = 3;
                    
                case false:
                    break;
            }


        case('other'):
        //Status 4-6 classification
        
            switch(D_LVAD) {
                case true:
                    return status = 4;
                    
                case false:
                    break;
            }

            switch(INO_wo_Hemo) {
                case true:
                    return status = 4;
                    
                case false:
                    break;
            }

            switch(CongHD) {
                case true:
                    return status = 4;
                    
                case false:
                    break;
            }

            switch(AmylHypReCard) {
                case true:
                    return status = 4;
                    
                case false:
                    break;
            }

            switch(HeartReTP) {
                case true:
                    return status = 4;
                    
                case false:
                    break;
            }

            switch(Waitlisted) {
                case true:
                    return status = 5;
                    
                case false:
                    break;
            }

            switch(TP_Candidate) {
                case true:
                    return status = 6;
                    
                case false:
                    break;
            }
        
        default:
            return status = 6;

    }
    
    return status = 6;
}


