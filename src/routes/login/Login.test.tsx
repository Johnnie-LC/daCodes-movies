import { describe, test, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import LoginPage from './Login'
import { AuthProvider } from '../../components/AuthContext'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const renderAuthAndRouter = (Component: JSX.Element, path: string) => {
  const routes = [
    {
      path,
      element: Component
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: [path],
    initialIndex: 1
  })

  return render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  )
}

describe('<Login />', () => {
  afterEach(cleanup)
  const user = userEvent.setup()

  test('should render a login form', () => {
    renderAuthAndRouter(<LoginPage />, '/login')

    expect(screen.getByRole('textbox')).toBeDefined()
    expect(screen.getByText('Login')).toBeTruthy()
    expect(screen.getByText('Correo electrónico de DaCodes')).toBeTruthy()
    expect(screen.getByText('Contraseña')).toBeTruthy()
    expect(screen.getByText('He leido y acepto todos los terminos y condiciones')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Crear cuenta' })).toBeTruthy()
  })

  test('should disable the submit button if the form is not valid', async () => {
    renderAuthAndRouter(<LoginPage />, '/login')

    const submitButton = screen.getByRole('button', { name: 'Crear cuenta' })
    expect((submitButton as HTMLButtonElement).disabled).toBe(true)

    const emailInput = screen.getByLabelText('Correo electrónico de DaCodes')
    await user.type(emailInput, 'John@gssmail.com')

    const passwordInput = screen.getByLabelText('Contraseña')
    await user.type(passwordInput, '12345678')

    const checkbox = screen.getByLabelText('He leido y acepto todos los terminos y condiciones')
    await user.click(checkbox)

    expect((submitButton as HTMLButtonElement).disabled).toBe(false)
  })
})
