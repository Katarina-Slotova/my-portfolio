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
} from './introduction.module.css'
import { motion } from 'framer-motion'

function Introduction() {
  return (
    <div className={container}>
      <div>
        <div className={columnLeft}>
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className={largeCircle}
          >
            <p className={introText}>
              Hi there! I'm <strong style={{color: '#db3056'}}>Katarina</strong>, a software developer.
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
            <p>I'm a former lawyer, who was swayed by the magic of software development.</p>
          </div>
          <div className={aboutRight}>
            <p>There</p>
          </div>
        </div>
      </div>
      <div className={columnRight}>
        <div className={backgroundContainer}></div>
        <StaticImage
          width={500}
          height={900}
          className={profileImg}
          src='../../images/profile-img.jpg'
          alt='Image of a phone and a laptop.'
        />
      </div>
    </div>
  )
}

export default Introduction
