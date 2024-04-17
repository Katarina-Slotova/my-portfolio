import React from 'react'
import { skillsLayout, stack, courses } from './skills.module.css'

function Skills() {
  return (
    <div className={skillsLayout}>
      <div className={stack}>
        <p>
          Hi there! I'm Katarina and I'm the proud creator of this site, which I
          built with Gatsby.
        </p>
      </div>
      <div className={courses}>
        <p>
          Hi there! I'm Katarina and I'm the proud creator of this site, which I
          built with Gatsby.
        </p>
      </div>
    </div>
  )
}

/* export const Head = () => (
  <>
    <Seo title='Skills' />
    <meta name='description' content='A portfolio section about my skills.' />
  </>
) */

export default Skills
