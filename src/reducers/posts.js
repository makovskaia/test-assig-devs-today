const initState = {
  posts: [],
  isFetching: false
};
const posts = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_ISFETCHING":
      return { ...state, isFetching: action.isFetching };
    case "ADD_POSTS":
      return { ...state, posts: action.posts };
    case "FETCH_POSTS_FAIL":
      return { ...state, isFetching: false };
    case "FETCH_POSTS_WIN":
      return { ...state, isFetching: false, posts: action.response };
    default:
      return state;
  }
};

export default posts;
