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

function Navbar() {
  return (
    <nav className={navbar}>
      <Link to='/#section1'>
        <StaticImage
          className={styleLogo}
          src='../../images/ks.png'
          width={60}
          height={60}
        />
      </Link>
      <div className={navbarWrapper}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/#section1' className={navLinkText}>
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
