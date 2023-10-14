import { useEffect, useState } from 'react'
import { useAuth } from '../components/AuthContext'

export const useRequestGuestSession = () => {
  const { setSession } = useAuth()
  const [isSession, setIsSession] = useState(false)

  const fetchRequestToken = async (TOKEN: string) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
      }
    }
    await fetch(`${import.meta.env.VITE_API_URL}/authentication/guest_session/new`, options)
      .then(async response => await response.json())
      .then(response => {
        if (response?.success) {
          setSession(response.guest_session_id)
        }
      })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    if (isSession) {
      void fetchRequestToken(import.meta.env.VITE_API_TOKEN)
    }
  }, [isSession])

  return { setIsSession }
}
