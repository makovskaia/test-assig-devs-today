import { addPosts, toggleIsFetching } from '../actions/actions'

export const fetch = async store => {
  await store.dispatch(toggleIsFetching(true))
  const a = await fetch('https://simple-blog-api.crew.red/posts'),
  b = await a.clone().json()
  await store.dispatch(addPosts(b))
  await store.dispatch(toggleIsFetching(false))
  return store
} 
