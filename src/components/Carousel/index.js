import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  carousel,
  slideDirection,
  left,
  right,
  indicator,
  dot,
  active,
} from './carousel.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
/*     hover: {
      backgroundColor: '#db3056',
      scale: 1.2,
    }, */
  }

  const dotVariants = {
    initial: {
      y: '0',
    },
    animate: {
      y: '-10px',
      scale: 1.2,
      transition: { type: 'spring', stiffness: 900, damping: 15 },
    },
/*     hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    }, */
  }

  function handleNext() {
    setDirection('right')
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  function handlePrevious() {
    setDirection('left')
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  function handleDot(index) {
    setDirection(currentIndex > index ? 'left' : 'right')
    setCurrentIndex(index)
  }

  return (
    <div>
      <div className={carousel}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            variants={slideVariants}
            initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
            animate='visible'
            exit='exit'
          />
        </AnimatePresence>
        <div className={slideDirection}>
          <button className={left} onClick={handlePrevious}>
            <IoIosArrowBack />
          </button>
          <button className={right} onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className={indicator}>
        {images.map((_, index) => {
          return (
            <motion.button
              key={index}
              className={`${dot} ${currentIndex === index ? active : ''}`}
              onClick={() => handleDot(index)}
              variants={dotVariants}
              initial='initial'
              animate={currentIndex === index ? 'animate' : ''}
              hover='hover'
            ></motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
