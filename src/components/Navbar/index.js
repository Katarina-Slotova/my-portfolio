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
  sidebar,
  sidebarLinkText,
  sidebarNavItem,
  menu,
} from './navbar.module.css'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

function Navbar({ isOnScreen, showNavbar }) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
  if (!isOnScreen) {
    isOnScreen = [false, false, false, false]
  }

  function showSidebar() {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <nav
      className={navbar}
      style={{ visibility: showNavbar ? 'visible' : 'hidden' }}
    >
      <Link to='/'>
        <StaticImage
          className={styleLogo}
          src='../../images/ks.png'
          width={80}
          height={82}
          alt='website logo'
        />
      </Link>

      <motion.ul
        className={sidebar}
        style={{ visibility: isSidebarVisible ? 'visible' : 'hidden' }}
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        animate={isSidebarVisible ? 'open' : 'closed'}
      >
        <li>
          <button
            onClick={() => {
              setIsSidebarVisible(false)
            }}
            className={menu}
            style={{ paddingTop: '20px' }}
          >
            <MdClose size={30} />{''}
          </button>
        </li>
        <li className={sidebarNavItem}>
          <Link
            to='/'
            className={sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Home
          </Link>
        </li>
        <li className={sidebarNavItem}>
          <Link
            to='/#skills'
            className={sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Skills
          </Link>
        </li>
        <li className={sidebarNavItem}>
          <Link
            to='/#projects'
            className={sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Projects
          </Link>
        </li>
        <li className={sidebarNavItem}>
          <Link
            to='/#contact'
            className={sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Contact
          </Link>
        </li>
      </motion.ul>

      <div className={navbarWrapper}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link
              to='/'
              className={navLinkText}
              style={{
                color: isOnScreen[0] ? '#db3056' : 'hsl(240deg 60% 25%)',
              }}
            >
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#skills'
              className={navLinkText}
              style={{
                color: isOnScreen[1] ? '#db3056' : 'hsl(240deg 60% 25%)',
              }}
            >
              Skills
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#projects'
              className={navLinkText}
              style={{
                color: isOnScreen[2] ? '#db3056' : 'hsl(240deg 60% 25%)',
              }}
            >
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to='/#contact'
              className={navLinkText}
              style={{
                color: isOnScreen[3] ? '#db3056' : 'hsl(240deg 60% 25%)',
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <button onClick={showSidebar} className={menu}>
              <FaBars size={24} />{''}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
