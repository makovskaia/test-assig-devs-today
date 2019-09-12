export const addPosts = posts => {
  return ({
    type: 'ADD_POSTS',
    posts
  })
}

export const toggleIsFetching = bool => {
  return ({
    type: 'TOGGLE_ISFETCHING',
    isFetching: bool,
  })
}

export const fetchPostsWin = response => dispatch => {
  return dispatch(addPosts(response))
}

export const fetchPostsFail = error => {
  return ({
    type: 'FETCH_POSTS_FAIL',
    error,
  })
}

export function fetchPosts() {
  return async dispatch => {
    try {
      let a = dispatch(toggleIsFetching(true));
      let response = await fetch('https://simple-blog-api.crew.red/posts')
      let res2 = await response.json()
      let res3 = await dispatch(fetchPostsWin(res2))
      let res4 = await dispatch(toggleIsFetching(false))
    } catch(error) {
      dispatch(fetchPostsFail(error))
    }
    return 'ok'
  }
}
