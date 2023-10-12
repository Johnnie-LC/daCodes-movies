import LoginIcon from '../icons/LoginIcon'
import DaCodesIcon from '../icons/DaCodesIcon'
import { NavBar } from './style'

const Header = () => {
  return (
    <header>
        <NavBar>
            <li>
              <DaCodesIcon
                width="172"
                height="68"
              />
            </li>
            <li>
              <LoginIcon
                width="52"
                height="52"
              />
            </li>
        </NavBar>
    </header>
  )
}

export default Header
