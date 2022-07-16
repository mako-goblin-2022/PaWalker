import React from 'react'
import { Link } from 'react-router-dom'

function MyProfile() {
  return <Link to={'/users/myProfile/walkHistory'}>View my Walk history</Link>
}

export default MyProfile
