import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { type Login } from '../types'
import { LOGIN_ID } from '../constants'
import { useAuth } from '../components/AuthContext'
import { useRequestGuestSession } from '../hooks/useRequestToken'
import { useNavigate } from 'react-router-dom'

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
`

const Label = styled.label`
  margin-bottom: 10px;
`

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`

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
    <section>
      <div>
        <h2>Login</h2>
        <span>¡Bienvenido!</span>
      </div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Correo electrónico de DaCodes</Label>
          <Input
          type="email"
          id={LOGIN_ID.email}
          value={login.email as string}
          onChange={handleLogin} />
        </div>

        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input
          type="password"
          id={LOGIN_ID.password}
          value={login.password as string}
          onChange={handleLogin} />
        </div>

        <div>
          <label htmlFor="validated" >He leido y cepto todos los terminos y condiciones</label>
          <input
          type="checkbox"
          id={LOGIN_ID.validated}
          name="validated"
          checked={login.validated}
          onChange={handleLogin} />
        </div>

        <Button type="submit" disabled={isDisable()}>
          Crear cuenta
        </Button>
      </Form>
    </section>
  )
}

export default LoginPage
