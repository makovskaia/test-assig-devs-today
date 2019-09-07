export const addPosts = posts => ({
  type: 'ADD_POSTS',
  posts
})

export const fetchPosts = (dispatch) => fetch('https://simple-blog-api.crew.red/posts')
  .then(res => dispatch(addPosts(res)))