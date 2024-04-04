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

        <ul className={navLinks}>
        <li className={styleLogo}>
          <StaticImage
            src='../../images/ks.png'
            layout='fixed'
            width={60}
            height={60}
          />
        </li>
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
