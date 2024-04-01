import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import Footer from '../Footer'

function Layout({ pageTitle, children }) {
  const data = useSiteMetadata()

  return (
    <div className={container}>
      <header className={siteTitle}>{data.title}</header>
      <nav>
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
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
