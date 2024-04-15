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
  if (!isOnScreen) {
    isOnScreen = [false, false, false, false]
  }

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
          alt='website logo'
        />
      </Link>
      <div className={navbarWrapper}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link
              to='/'
              className={navLinkText}
              style={{ color: isOnScreen[0] ? '#db3056' : '#0802a3' }}
            >
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#about'
              className={navLinkText}
              style={{ color: isOnScreen[1] ? '#db3056' : '#0802a3' }}
            >
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#projects'
              className={navLinkText}
              style={{ color: isOnScreen[2] ? '#db3056' : '#0802a3' }}
            >
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#contact'
              className={navLinkText}
              style={{ color: isOnScreen[3] ? '#db3056' : '#0802a3' }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
