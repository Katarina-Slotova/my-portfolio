import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

function ProjectPage({ data }) {
  const projectList = data.allFile.nodes
  return (
    <Layout pageTitle='My Projects'>
      <ul>
        {projectList.map((project) => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const projectInfo = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export const Head = () => <Seo title='My Projects' />

export default ProjectPage
