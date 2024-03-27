import React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>About</Link>
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
