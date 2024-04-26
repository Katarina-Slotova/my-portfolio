import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  columnLeft,
  columnRight,
  profileImg,
  backgroundContainer,
  largeCircle,
  middleCircle,
  smallCircle,
  introText,
  about,
  aboutLeft,
  aboutRight,
  introAboutMe,
  profileImgMobile,
} from './introduction.module.css'
import { motion } from 'framer-motion'

function Introduction() {
  return (
    <div className={container}>
      <div>
          <div style={{ width: '180px', height: '30px' }}>
            <StaticImage
              height={1000}
              width={600}
              className={profileImgMobile}
              src='../../images/profile-img-2.png'
              alt='Image of a phone and a laptop.'
            />
          </div>
        <div className={columnLeft}>
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className={largeCircle}
          >
            <p className={introText}>
              Hi there! I'm{' '}
              <strong style={{ color: '#db3056' }}>Katarina</strong>, a former
              lawyer turned web developer.
            </p>
          </motion.div>
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
            className={middleCircle}
          ></motion.div>
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className={smallCircle}
          ></motion.div>
        </div>
        <div className={about}>
          <div className={aboutLeft}>
            <p className={introAboutMe}>
              My journey into software began at Hive Helsinki, where{' '}
              <strong>collaboration</strong> and{' '}
              <strong>peer-to-peer project-based learning </strong>
              are at the core of the pedagogy.
            </p>
            <p className={introAboutMe}>
              I'm a self-motivated learner, who's tackled solo projects and
              worked with other students. This allowed me to enhance important
              soft skills, such as <strong>adaptability</strong> and{' '}
              <strong>communication</strong>.
            </p>
          </div>
          <div className={aboutRight}>
            <p className={introAboutMe}>
              Drawing from my legal background, I approach programming with a
              keen eye for <strong>detail</strong> and creative{' '}
              <strong>problem-solving</strong>.
            </p>
            <p className={introAboutMe}>
              My interest in <strong>cyber security</strong> helps me to create
              websites that are not only user-firendly and maintainable, but
              also <strong>protected</strong> against potential threats.
            </p>
          </div>
        </div>
      </div>
      <div className={columnRight}>
        <motion.div
          className={backgroundContainer}
          animate={{ x: -10 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        ></motion.div>
        <StaticImage
          width={500}
          height={800}
          className={profileImg}
          src='../../images/profile-img.jpg'
          alt='Image of a phone and a laptop.'
        />
      </div>
    </div>
  )
}

export default Introduction
