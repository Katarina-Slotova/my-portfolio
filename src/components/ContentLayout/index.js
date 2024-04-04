import React from 'react'
import {container, heading } from './contentLayout.module.css'

function ContentLayout({pageTitle, children, id}) {
  return (
    <main>
      <div className={container}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </div>
    </main>
  )
}

export default ContentLayout
