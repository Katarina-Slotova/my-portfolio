import React from 'react'
import { wrapper, attribution } from './footer.module.css'

function Footer() {
  return (
      <div className={wrapper}>
        <p className={attribution}>
          © {new Date().getFullYear()} &middot; Built by Katarina, with{' '}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </p>
      </div>

  )
}

export default Footer
