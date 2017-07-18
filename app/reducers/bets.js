export default function(state = [], action) {
    switch (action.type) {
        case 'FETCHED_BETS':
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const selectorsBets = {
    getBets: (state) => state.bets
};
