import { createContext, useContext, type ReactNode, useState } from 'react'

interface AuthContextType {
  token: string | null
  setSession: (token: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider ({ children }: { children: ReactNode }) {
  const [token, setSession] = useState<string | null>(null)

  return (
    <AuthContext.Provider value={{ token, setSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}
