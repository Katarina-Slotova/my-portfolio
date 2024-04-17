import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { projectTitle } from './projects.module.css'
import Seo from '../Seo'
import {
  container,
  card,
  projectTag,
  projectTags,
  projectThumbnail,
  redirectLink,
  arrow,
  githubLink,
  githubContainer,
} from './projects.module.css'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

function Projects({ data }) {
  let imageArr = []

  data.allMdx.nodes.map((image) => {
    const processedImage = getImage(image.frontmatter.hero_image)
    return imageArr.push(processedImage)
  })

  return (
    <div>
      <div className={container}>
        {data.allMdx.nodes.map((project) => (
          <motion.div
            className={card}
            key={project.id}
            whileHover={{
              scale: 1.1,
              boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.1)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <GatsbyImage
              className={projectThumbnail}
              image={imageArr[project.frontmatter.imageId]}
              alt={project.frontmatter.hero_image_alt}
            />

            <h2>
              {' '}
              <Link
                className={projectTitle}
                to={`/${project.frontmatter.slug}`}
              >
                {project.frontmatter.title}
              </Link>{' '}
            </h2>
            <p>{project.excerpt}</p>
            <div className={projectTags}>
              {project.frontmatter.tags.map((tag, id) => (
                <div className={projectTag} key={id}>
                  {tag}
                </div>
              ))}
            </div>
            <Link to={`/${project.frontmatter.slug}`}>
              <motion.div
                className={redirectLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                Read more <FaArrowRight className={arrow} />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className={githubContainer}>
        <a href='https://github.com/Katarina-Slotova' className={githubLink}>Dive into my Github protfolio<FaArrowRight className={arrow} /></a>
      </div>
    </div>
  )
}

export const Head = () => <Seo title='My Projects' />

export default Projects
