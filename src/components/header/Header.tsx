import { Link } from 'react-router-dom'
import LoginIcon from '../icons/LoginIcon'
import DaCodesIcon from '../icons/DaCodesIcon'
import { NavBar } from './style'

const Header = () => {
  return (
    <header>
        <NavBar>
            <li>
              <Link to={'/'}>
                <DaCodesIcon
                  width="172"
                  height="68"
                />
              </Link>
            </li>
            <li>
              <Link to={'/login'}>
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
