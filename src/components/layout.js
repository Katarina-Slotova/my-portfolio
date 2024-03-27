import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

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
      {/*       <footer>
        © {new Date().getFullYear()} &middot; Built by Katarina, with{' '}
        <a href='https://www.gatsbyjs.com'>Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
