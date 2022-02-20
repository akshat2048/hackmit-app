
let VA_ECMO = false;
let ND_BIVAD = false;
let Arrythmia = false;
let IABP = false;
let Impella = false;
let TandemHeart = false;
let CentriMag = false;
let RVAD = false;
let CHM = false;

let MSCD_support = '';
let ND_LVAD = false;



function getStatus() {

    let status = 0;

    switch(MSCD_support) {

        case('temporary'):
        // Status 1-2 classification
        // VA-ECMO, Biventricular SD, Arrythmia

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

            switch(CHM) {
                case true:
                    return status = 2;
                    
                case false:
                    break;
            }

        case('durable'):
        // Status 2-3 classification

            // switch() {
                
            // }
        
        case('inotrope'):
        // Status 4-6 classification




    }



    
    return status;
}


