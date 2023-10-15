import { useEffect } from 'react'
import Header from '../../components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container } from './style'
import { FooterDacode } from '../../components/footer/Footer'

export const Root = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login')
  }, [])

  return (
  <>
    <Header />

    <Container>
      <Outlet />
    </Container>

    <FooterDacode />
  </>
  )
}
