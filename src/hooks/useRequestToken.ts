import { useEffect, useState } from 'react'

export const useRequestToken = () => {
  const [token, setToken] = useState(null)

  const fetchRequestToken = async (TOKEN: string) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
      }
    }
    await fetch('https://api.themoviedb.org/3/authentication/token/new', options)
      .then(async response => await response.json())
      .then(response => {
        if (response?.success) {
          setToken(response.request_token)
        }
      })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    void fetchRequestToken(import.meta.env.VITE_TOKEN)
  }, [])

  return { token }
}
