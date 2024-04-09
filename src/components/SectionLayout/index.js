import React from 'react'
import { container, heading } from './sectionLayout.module.css'

function SectionLayout({ sectionTitle, children }) {
  return (
    <div className={container}>
      <h1 className={heading}>{sectionTitle}</h1>
      {children}
    </div>
  )
}

export default SectionLayout
