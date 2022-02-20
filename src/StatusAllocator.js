
let VA_ECMO = false;
let ND_BIVAD = false;
let Arrythmia = false;
let LVAD = false;
let MSCD_support = '';
let 



function getStatus() {

    let status = 0;

    switch(MSCD_support) {

        case('temporary'):
        // Status 1 classification
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

        case('durable'):
        // Status 2-6 classification

    }



    
    return status;
}


