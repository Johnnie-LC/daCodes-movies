// import { useEffect } from 'react'

import { useEffect, useState } from 'react'

const Login = () => {
  const [token] = useState('f5084344028de0a9549f7cdd82cea5d9be18fdef')
  const createASession = async () => {
    // Create a session
    const sessionData = {
      request_token: token
    }

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      },
      body: JSON.stringify(sessionData)
    }

    await fetch('https://api.themoviedb.org/3/authentication/session/new', options)
      .then(async response => await response.json())
      .then(response => { console.log(response) })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    if (token !== null) {
      void createASession()
    }
  }, [])

  return (
    <div>
        Login
        <div className="logo"></div>
    </div>
  )
}

export default Login
