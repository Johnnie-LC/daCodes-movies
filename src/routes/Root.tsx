import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
    

`
export const Root = () => {
  return (
    <Container>
        <Header />
        <Outlet />
    </Container>
  )
}
