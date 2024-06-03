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
  redirectLink,
  smallHeading,
  coursesSubsection,
  subsection,
} from './skills.module.css'
import { skillsDataLeft, skillsDataRight } from './data.js'

function Skills() {
  return (
    <div className={skillsLayout}>
      <div className={stack}>
        <div className={stackLeft}>
          {skillsDataLeft.map(({ src, alt, name }) => {
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
        <div className={coursesSubsection}>
          <div className={subsection}>
            <h3 className={smallHeading}>Education</h3>
            <p>
              In addition to the projects included in my core studies at{' '}
              <a
                className={redirectLink}
                href='https://www.hive.fi/en/'
                target='_blank'
                rel='noreferrer'
              >
                Hive Helsinki
              </a>
              , I've taken several online courses, including{' '}
              <a
                className={redirectLink}
                href='https://udemy-certificate.s3.amazonaws.com/image/UC-420c1d21-74f7-459b-88ed-c6d08a7cd616.jpg'
                target='_blank'
                rel='noreferrer'
              >
                Complete Web Development Bootcamp
              </a>{' '}
              and{' '}
              <a
                className={redirectLink}
                href='https://courses.joshwcomeau.com/certificate/65a059e1d03e6e1ac4ba2ccd'
                target='_blank'
                rel='noreferrer'
              >
                Joy of React
              </a>
              .
            </p>
            <p>
              I'm currently learning TypeScript through University of Helsinki's{' '}
              <a
                className={redirectLink}
                href='https://fullstackopen.com/en/part9'
                target='_blank'
                rel='noreferrer'
              >
                Full Stack Open
              </a>{' '}
              course, as well as exploring the underlying functions of the web,
              computer communication, and the fundamentals of ethical web
              hacking via{' '}
              <a
                className={redirectLink}
                href='https://tryhackme.com/'
                target='_blank'
                rel='noreferrer'
              >
                TryHackMe's
              </a>{' '}
              learning paths.
            </p>
          </div>
          <div className={subsection}>
            <h3 className={smallHeading}>Volunteering</h3>
            <ul>
              <li>Junction Hackathon 2022 (Sustainability Team member)</li>
              <li>
                React Finland Conference 2022 (stage operations, general support for
                participants and partners)
              </li>
              <li>
                Finnish Model United Nations 2017 (Head of the Sustainability,
                Food & Beverages Team)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
