/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux'
import { saveUser } from './features/auth/authSlice'

// eslint-disable-next-line no-unused-vars
export async function cacheUser(useAuth0) {
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.auth.user.token)
  const loading = useSelector((state) => state.auth.user.loading)
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  // await can be used since we are within an asynchronous function
  if (isAuthenticated && !userToken && !loading) {
    try {
      const token = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        name: user.name,
        token: token,
      }
      console.log(userToSave)
      dispatch(saveUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
