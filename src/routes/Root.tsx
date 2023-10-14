import { useEffect } from 'react'
import Header from '../components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`
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
  </>
  )
}
