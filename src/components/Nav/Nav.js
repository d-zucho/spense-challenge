import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { ReactComponent as HamburgerMenu } from './Hamburger Menu.svg'
import './NewNav.scss'

const Nav = () => {
  const width = window.innerWidth
  return (
    <div className='header__navbar'>
      {/* logo container  */}
      <div className='header__logo'>
        <p>spense.</p>
      </div>

      {/* Nav Features */}
      <nav className='header__navMenu'>
        <ul className='header__links'>
          <li>
            <a className='header__linkItem' href='#'>
              Business
            </a>
          </li>
          <li>
            <a className='header__linkItem' href='#'>
              Pricing
            </a>
          </li>
          <li>
            <a className='header__linkItem' href='#'>
              Features
            </a>
          </li>
        </ul>
      </nav>
      {/* Login / Get Started */}
      <div className='header__loginMenu'>
        <button className='header__btn header__btn--light'>Login</button>
        <button className='header__btn header__btn--dark'>Get Started</button>
      </div>
      <HamburgerMenu className='toggle' />
    </div>
  )
}

export default Nav
