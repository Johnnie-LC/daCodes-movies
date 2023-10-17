import { describe, test, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Header from './Header' // Import your Header component
import { MemoryRouter } from 'react-router-dom'

describe('Header Component', () => {
  afterEach(cleanup)
  test('should render navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    // Find navigation links by text
    const homeLink = screen.getByTestId('DaCodes-Home-id')
    const loginLink = screen.getByTestId('login-id')

    // Check if the navigation links are rendered
    expect(homeLink).toBeDefined()
    expect(loginLink).toBeDefined()
  })

  //   test('should have the correct link destinations', () => {
  //     render(
  //       <MemoryRouter>
  //         <Header />
  //       </MemoryRouter>
  //     )

  //     // Find the Link components and check their "to" props
  //     const homeLink = screen.getByRole('link', { name: 'DaCodesIcon' })
  //     const loginLink = screen.getByRole('link', { name: 'LoginIcon' })

//     expect(homeLink).toHaveAttribute('to', '/')
//     expect(loginLink).toHaveAttribute('to', '/login')
//   })
})
