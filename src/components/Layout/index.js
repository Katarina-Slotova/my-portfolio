import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navbar,
  navbarWrapper,
  styleLogo,
} from './layout.module.css'
import Footer from '../Footer'
import { StaticImage } from 'gatsby-plugin-image'

function Layout({ pageTitle, children }) {
  const data = useSiteMetadata()

  return (
    <div>
      {/* <header className={siteTitle}>{data.title}</header> */}
      <nav className={navbar}>
        <Link to='/'>
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
              <Link to='/' className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/about' className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/projects' className={navLinkText}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className={container}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
