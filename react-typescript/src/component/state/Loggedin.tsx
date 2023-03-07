import React, { useState } from 'react'

const Loggedin = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const handleLogin = () => {
      setisLoggedIn(true)
     }
  const handleLogout = () => {
      setisLoggedIn(false)
    }
  return (
      <div>
          <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn? 'logged in':'logged out'}</div>
    </div>
  )
}

export default Loggedin