import React from 'react'
import {
  skillsLayout,
  stack,
  courses,
  stackLogoContainer,
  logoImg,
  logoName,
  stackLeft,
  stackRight,
} from './skills.module.css'
import { skillsDataLeft, skillsDataRight } from './data.js'

function Skills() {
  return (
    <div className={skillsLayout}>
      <div className={stack}>
        <div className={stackLeft}>
          {skillsDataLeft.map(({ src, alt, name }) => {
            console.log(src)
            return (
              <div className={stackLogoContainer}>
                <img
                  src={src}
                  alt={alt}
                  width={50}
                  height={50}
                  className={logoImg}
                />
                <p className={logoName}>{name}</p>
              </div>
            )
          })}
        </div>
        <div className={stackRight}>
          {skillsDataRight.map(({ src, alt, name }) => {
            console.log(src)
            return (
              <div className={stackLogoContainer}>
                <img
                  src={src}
                  alt={alt}
                  width={50}
                  height={50}
                  className={logoImg}
                />
                <p className={logoName}>{name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={courses}>
        <p>Other Courses</p>
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
