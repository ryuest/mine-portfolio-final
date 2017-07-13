export default function(state = {'posts': ['posts' : {'likes': 0}]}, action) {
    switch (action.type) {
        case 'FETCHED_POSTS':
            return {
                ...state,
                ...action.data
            };
        case 'INCREMENT_LIKES':
            const i = action.index;
            const removePlayerList = [
              ...state.posts.slice(0, 0),
              {...state.posts[0], likes: state.posts[0].likes + 1},
              ...state.posts.slice(0 + 1),
            ];
            return {
                ...state,
                posts: removePlayerList
            };
        default:
            return state;
    }
}

export const selectorsPost = {
    getPosts: (state) => state.posts
};
