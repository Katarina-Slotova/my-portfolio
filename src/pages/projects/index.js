import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import { projectTitle } from './projects.module.css'

function ProjectPage({ data }) {
  return (
    <Layout pageTitle='My Projects'>
      {data.allMdx.nodes.map((project) => (
        <article key={project.id}>
          <h2>
            {' '}
            <Link
              className={projectTitle}
              to={`/projects/${project.frontmatter.slug}`}
            >
              {project.frontmatter.title}
            </Link>{' '}
          </h2>
          <p>Posted: {project.frontmatter.date}</p>
          <p>{project.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const projectsInfo = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title='My Projects' />

export default ProjectPage
