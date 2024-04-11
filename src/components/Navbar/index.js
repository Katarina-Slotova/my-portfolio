import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  navbar,
  styleLogo,
  navbarWrapper,
  navLinks,
  navLinkItem,
  navLinkText,
} from './navbar.module.css'

function Navbar({ isOnScreen, showNavbar }) {
	const [isFirstOnScreen, isSecondOnScreen, isThirdOnScreen, isFourthOnScreen] = isOnScreen
  return (
    <nav
      className={navbar}
      style={{ visibility: showNavbar ? 'visible' : 'hidden' }}
    >
      <Link to='/'>
        <StaticImage
          className={styleLogo}
          /* src='../../images/ks.png'
          width={40}
          height={55} */
          src='../../images/ks1.png'
          width={34}
          height={60}
        />
      </Link>
      <div className={navbarWrapper}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText} style={{color: isFirstOnScreen ? '#db3056' : '#0802a3'}}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/#section2' className={navLinkText} style={{color: isSecondOnScreen ? '#db3056' : '#0802a3'}}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/#section3' className={navLinkText} style={{color: isThirdOnScreen ? '#db3056' : '#0802a3'}}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/#section4' className={navLinkText} style={{color: isFourthOnScreen ? '#db3056' : '#0802a3'}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
