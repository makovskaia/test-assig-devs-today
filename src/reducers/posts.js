const initState = {
  status: 'ready',
  posts: []
}
const posts = (state = [1], action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return action.posts
    default:
      return state
  }
}

export default posts