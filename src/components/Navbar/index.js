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
  navbarNotVisible,
} from './navbar.module.css'

function Navbar({ showNavbar }) {
  return (
    <nav
		className={navbar}
      /* className={showNavbar ? navbar : navbarNotVisible} */
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
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/#section2' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/#section3' className={navLinkText}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
