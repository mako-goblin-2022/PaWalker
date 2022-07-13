import { useSelector, useDispatch } from 'react-redux'
import { setLoggedInUser } from './actions/loggedInUser'

// eslint-disable-next-line no-unused-vars
export async function CacheUser(useAuth0) {
  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => state.loggedInUser)

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  // await can be used since we are within an asynchronous function
  const token = await getAccessTokenSilently()
  if (isAuthenticated && !loggedInUser?.token) {
    try {
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: token,
      }
      dispatch(setLoggedInUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
