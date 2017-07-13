export default function(state = [], action) {
    switch (action.type) {
        case 'PLACE_BET':
            return [
                ...state, {
                    betStake: {
                        stakes: action.betStake,
                        selections: action.selections
                    }
                }
            ]
        default:
            return state;
    }
}
