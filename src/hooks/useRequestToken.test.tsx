import { describe, test } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useRequestGuestSession } from './useRequestToken'
import { AuthProvider } from '../components/AuthContext'

interface WrapperProps {
  children: JSX.Element
}
const wrapper = ({ children }: WrapperProps) => <AuthProvider>{children}</AuthProvider>

describe('useRequestGuestSession', () => {
  test('should set session when isSession is true', async () => {
    const { result } = renderHook(() => useRequestGuestSession(), { wrapper })

    result.current.setIsSession(true)

    // Wait for the fetchRequestToken to complete
    await new Promise((resolve) => setTimeout(resolve, 0)) // Wait for the next tick
  })
})
