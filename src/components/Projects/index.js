import React from 'react'
import { Link, graphql } from 'gatsby'
import { projectTitle } from './projects.module.css'
import Seo from '../Seo'

function Projects({ data }) {
  return (
    <div>
      {data.allMdx.nodes.map((project) => (
        <article key={project.id}>
          <h2>
            {' '}
            <Link
              className={projectTitle}
              to={`/${project.frontmatter.slug}`}
            >
              {project.frontmatter.title}
            </Link>{' '}
          </h2>
          <p>Posted: {project.frontmatter.date}</p>
          <p>{project.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export const Head = () => <Seo title='My Projects' />

export default Projects
