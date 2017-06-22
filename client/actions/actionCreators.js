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

const enableBetSlip = () => ({
    type: 'ENABLE_BETSLIP'
});

const disableBetSlip = () => ({
    type: 'DISABLE_BETSLIP'
});

const getReceipt = () => ({
    type: 'GET_RECEIPT'
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

const submitBet = () => ({
      type: 'INPUT_FORM_SUBMIT'
});



export default {
    increment,
    fetchPosts,
    fetchedPostsKeys,
    placeBet,
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
