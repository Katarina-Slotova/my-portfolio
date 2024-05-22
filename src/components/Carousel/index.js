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
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  function handleDot(index) {
    setCurrentIndex(index)
  }

  return (
    <div>
      <div className={carousel}>
        <img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        ></img>
        <div className={slideDirection}>
          <button className={left} onClick={handlePrevious}>
            <FaArrowLeft />
          </button>
          <button className={right} onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className={indicator}>
        {images.map((_, index) => {
          return (
            <button
              key={index}
              className={`${dot} ${currentIndex === index ? active : ''}`}
              onClick={() => handleDot(index)}
            ></button>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
