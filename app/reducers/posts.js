export default function(state = [], action) {
    switch (action.type) {
        case 'FETCHED_POSTS':
            return {
                ...state,
                ...action.data
            };
        case 'INCREMENT_LIKES':
            //  const i = action.index;
            const list = [
                ...state.posts.slice(0, 0), {
                    ...state.posts[0],
                    likes: state.posts[0].likes + 1
                },
                ...state.posts.slice(0 + 1)
            ];
            return {
                ...state,
                posts: list
            };
        default:
            return state;
    }
}

export const selectorsPost = {
    getPosts: (state) => state.posts
};
