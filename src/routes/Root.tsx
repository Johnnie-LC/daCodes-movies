import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`
export const Root = () => {
  return (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
  )
}
