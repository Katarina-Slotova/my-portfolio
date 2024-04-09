import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { projectTitle } from './projects.module.css'
import Seo from '../Seo'
import {
  container,
  card,
  projectTag,
  projectTags,
  projectThumbnail,
} from './projects.module.css'
import { motion } from 'framer-motion'

function Projects({ data }) {
  let imageArr = []

  data.allMdx.nodes.map((image) => {
    const processedImage = getImage(image.frontmatter.hero_image)
    imageArr.push(processedImage)
  })

  return (
    <div className={container} id='section3'>
      {data.allMdx.nodes.map((project) => (
        <motion.div
          className={card}
          key={project.id}
          whileHover={{
            scale: 1.1,
            boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.1)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        >
          <GatsbyImage
            className={projectThumbnail}
            image={imageArr[project.frontmatter.imageId]}
            alt={project.frontmatter.hero_image_alt}
          />

          <h2>
            {' '}
            <Link className={projectTitle} to={`/${project.frontmatter.slug}`}>
              {project.frontmatter.title}
            </Link>{' '}
          </h2>
          <div className={projectTags}>
            {project.frontmatter.tags.map((tag) => (
              <div className={projectTag}>{tag}</div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export const Head = () => <Seo title='My Projects' />

export default Projects
