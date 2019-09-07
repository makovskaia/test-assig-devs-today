export const addPosts = posts => {
  console.log(posts)
  return ({
    type: 'ADD_POSTS',
    posts
  })
}

export function fetchPosts() {
  return dispatch => fetch('https://simple-blog-api.crew.red/posts')
    .then(res => res.clone().json())
    .then(res => {
      console.log('heeeey', res)
      dispatch(addPosts(res))
    })
}