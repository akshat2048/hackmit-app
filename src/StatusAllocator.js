
//
let MSCD_support = '';

//TEMPORARY SUPPORT subcategories
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

//LVAD Subcategories
let Hemolysis = false;
let PurmpThrombosis = false;
let RightHeartFailure = false;
let DeviceInfection = false;
let AortInsuff = false;
let ICD_Shock = false;

//other durable support
let TAH = false;
let D_BIDVAD = false;



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


