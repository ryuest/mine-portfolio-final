const getSelection = (selection) => ({
    type: 'ADD_SELECTION',
    selection
});

const removeSelection = (selection) => ({
    type: 'REMOVE_SELECTION',
    selection
});

const clearBets = () => ({
    type: 'CLEAR_ALL_SELECTIONS'
});

const placeBet = (betStake, selections) => ({
    type: 'PLACE_BET',
    betStake,
    selections
});

const enableReceipt = () => ({
    type: 'ENABLE_RECEIPT'
});

const disableReceipt = () => ({
    type: 'DISABLE_RECEIPT'
});

const enableOpenBets = () => ({
    type: 'ENABLE_OPENBETS'
});

const disableOpenBets = () => ({
    type: 'DISABLE_OPENBETS'
});

const enableBetSlip = () => ({
    type: 'ENABLE_BETSLIP'
});

const disableBetSlip = () => ({
    type: 'DISABLE_BETSLIP'
});

const getReceipt = () => ({
    type: 'GET_RECEIPT'
});

const getShowOpenBets = () => ({
    type: 'SHOW_OPENBETS'
});

const increment = (likes) => ({
    type: 'INCREMENT_LIKES',
    likes
});

const log = () => ({
    type: 'LOG'
});

const fetchPosts = () => ({
    type: 'FETCH_POSTS',
});

const fetchedPostsKeys = (posts) => ({
    type: 'FETCHED_POSTS',
    data: { posts },
});

const fetchBets = () => ({
    type: 'FETCH_BETS',
});

const fetchedBetsKeys = (bets) => ({
    type: 'FETCHED_BETS',
    data: { bets },
});

const submitBet = () => ({
      type: 'INPUT_FORM_SUBMIT'
});

export default {
    increment,
    fetchPosts,
    fetchedPostsKeys,
    fetchBets,
    fetchedBetsKeys,
    placeBet,
    enableOpenBets,
    disableOpenBets,
    getShowOpenBets,
    enableBetSlip,
    disableBetSlip,
    getSelection,
    removeSelection,
    clearBets,
    enableReceipt,
    disableReceipt,
    getReceipt,
    log,
    submitBet
};
