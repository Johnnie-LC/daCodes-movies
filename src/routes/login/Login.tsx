import { useEffect, useState } from 'react'
import { type Login } from '../../types'
import { LOGIN_ID } from '../../constants'
import { useAuth } from '../../components/AuthContext'
import { useRequestGuestSession } from '../../hooks/useRequestToken'
import { Form, useNavigate } from 'react-router-dom'
import { Button, Input, InputCheck, InputContainer, Label, LoginContainer, LoginTitle } from './style'

const LoginPage = () => {
  const initialState: Login = {
    email: '',
    password: '',
    validated: false
  }

  const [login, setLogin] = useState<Login>(initialState)
  const { setIsSession } = useRequestGuestSession()
  const { token } = useAuth()
  const navigate = useNavigate()

  // const [errors, setErrors] = useState({})

  const isDisable = () => {
    const valideMail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(login.email as string)
    const validPassword = login.password ? login.password.length >= 7 : false
    const validaValidates = login.validated

    if (valideMail && validPassword && validaValidates) {
      return false
    }

    return true
  }

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = e.target

    setLogin({
      ...login,
      [id]: id === LOGIN_ID.validated ? checked : value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!token) {
      setIsSession(true)
    }
  }

  useEffect(() => {
    if (token !== null) {
      navigate('/movies')
    }
  }, [token])

  return (
    <LoginContainer>
      <LoginTitle>
        <h2>Login</h2>
        <span>¡Bienvenido!</span>
      </LoginTitle>
      <Form onSubmit={handleSubmit}>

        <InputContainer>
          <Label htmlFor="email">Correo electrónico de DaCodes</Label>
          <Input
          type="email"
          id={LOGIN_ID.email}
          value={login.email as string}
          onChange={handleLogin} />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Contraseña</Label>
          <Input
          type="password"
          id={LOGIN_ID.password}
          value={login.password as string}
          onChange={handleLogin} />
        </InputContainer>

        <InputCheck>
          <input
          type="checkbox"
          id={LOGIN_ID.validated}
          name="validated"
          checked={login.validated}
          onChange={handleLogin} />
          <label htmlFor="validated">He leido y acepto todos los terminos y condiciones</label>
        </InputCheck>

        <Button type="submit" disabled={isDisable()}>
          Crear cuenta
        </Button>
      </Form>
    </LoginContainer>
  )
}

export default LoginPage
