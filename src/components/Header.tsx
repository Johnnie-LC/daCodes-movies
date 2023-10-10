import styled from 'styled-components'

const NavBar = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    justify-content: space-between;
    min-width: 500px;
    padding: 0;
    
    @media (max-width: 700px) {
        flex-direction: column;
    }
`

const Header = () => {
  return (
    <header>
        <NavBar>
            <li>DaCodes</li>
            <li>Login</li>
        </NavBar>
    </header>
  )
}

export default Header
