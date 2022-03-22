import { RiMenuFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import './Nav.scss'

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
      <IconContext.Provider value={{ className: 'nav-toggler' }}>
        <RiMenuFill />
      </IconContext.Provider>
    </div>
  )
}

export default Nav
