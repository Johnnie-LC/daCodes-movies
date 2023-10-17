import { Link } from 'react-router-dom'
import LoginIcon from '../icons/LoginIcon'
import DaCodesIcon from '../icons/DaCodesIcon'
import { NavBar } from './style'

const Header = () => {
  return (
    <header>
        <NavBar>
            <li>
              <Link to={'/'} data-testid='DaCodes-Home-id'>
                <DaCodesIcon
                  width="172"
                  height="68"
                />
              </Link>
            </li>
            <li>
              <Link to={'/login'} data-testid='login-id'>
                <LoginIcon
                  width="52"
                  height="52"
                />
              </Link>
            </li>
        </NavBar>
    </header>
  )
}

export default Header
