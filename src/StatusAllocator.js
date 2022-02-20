
//define support type
let MSCD_support = '';



//TEMPORARY SUPPORT
let VA_ECMO = false;
let ND_BIVAD = false;
let Arrythmia = false;
let IABP = false;
let Impella = false;
let TandemHeart = false;
let CentriMag = false;
let RVAD = false;
let CHM = false;
let ND_LVAD = false;




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




function getStatus() {

    let status = 0;

    switch(MSCD_support) {

        case('temporary'):
        // Status 1-2 classification in temporary support
        // VA-ECMO, Biventricular SD, Arrythmia, etc.

            switch(VA_ECMO) {
                case true:
                    return status = 1;
                
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
        // Status 3-6 classification

            // switch() {
                
            // }
        
        // case('inotrope'):
        // // Status 4-6 classification




    }



    
    return status;
}


