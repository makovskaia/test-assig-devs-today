export const addPosts = posts => {
  return ({
    type: 'ADD_POSTS',
    posts
  })
}

export const toggleIsFetching = bool => {
  return ({
    type: 'TOGGLE_ISFETCHING',
    bool
  })
}

export function fetchPosts() {
  return async dispatch => 
    const a = await toggleIsFetching(true)
    const b = await fetch('https://simple-blog-api.crew.red/posts')
    .then(res => res.clone().json())
    .then(res => {
      dispatch(addPosts(res))
    })
    const c = await toggleIsFetching(false)
    
}