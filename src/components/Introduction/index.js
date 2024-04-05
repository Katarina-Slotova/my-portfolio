import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Introduction() {
  return (
    <div>
      <p>Welcome to my portfolio website!</p>
      <p>I'm creating this website by following a Gatsby tutorial.</p>
      <StaticImage
        src='../../images/laptop.jpg'
        alt='Image of a phone and a laptop.'
      />
    </div>
  )
}

export default Introduction
