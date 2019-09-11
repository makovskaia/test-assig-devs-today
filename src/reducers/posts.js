const initState = {
  posts: [],
  isFetching: false,
}
const posts = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_ISFETCHING':
      return Object.assign(state, { isFetching: action.isFetching })
    case 'ADD_POSTS':
      return Object.assign(state, { posts: action.posts })
    default:
      return state
  }
}

export default posts