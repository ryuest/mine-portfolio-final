export default function(state = [], action) {
    switch (action.type) {
        case "ENABLE_BETSLIP":
            return {
                ...state,
                betslip: true
            }
        case 'DISABLE_BETSLIP':
            return {
                ...state,
                betslip: false
            }
        case 'ENABLE_RECEIPT':
            return {
                ...state,
                receipt: true
            }
        case 'DISABLE_RECEIPT':
            return {
                ...state,
                receipt: false
            }
        case 'ENABLE_OPENBETS':
            return {
                ...state,
                openbets: true
            }
        case 'DISABLE_OPENBETS':
            return {
                ...state,
                openbets: false
            }
        default:
            return state;
    }
}
