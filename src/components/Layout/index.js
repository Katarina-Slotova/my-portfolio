import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import { container, innerContent } from './layout.module.css'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Layout({ children }) {
  //const data = useSiteMetadata()
  const [scrollY, setScrollY] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    function handleScroll() {
      let newScrollPos = window.scrollY

      if (scrollY < newScrollPos && scrollY >= 40) {
        setVisible(false)
      } else if (scrollY > newScrollPos) {
        setVisible(true)
      }
      setScrollY(newScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  const showNavbar = visible

  return (
    <div>
      <main>
        <Navbar showNavbar={showNavbar} />
        <div className={container}>
          <div className={innerContent}>
            {/* <h1 className={heading}>{pageTitle}</h1> */}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
