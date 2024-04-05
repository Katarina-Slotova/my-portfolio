import React from 'react'
import {heading} from './sectionLayout.module.css'

function SectionLayout({ sectionTitle, children }) {
  return (
    <div>
      <h1 className={heading}>{sectionTitle}</h1>
      {children}
    </div>
  )
}

export default SectionLayout
