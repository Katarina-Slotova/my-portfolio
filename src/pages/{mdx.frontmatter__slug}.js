import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { App } from '../components/App'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, heading, about, aboutContainer, subjectLink } from './project.module.css'
import { intro } from './data.js'

function Project({ data, children }) {
  const image = getImage(data.mdx.frontmatter.intro_img)
  console.log(data.mdx.frontmatter.imageId)
  console.log(intro)

  return (
    <App>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className={container}>
          <h1 className={heading}>{data.mdx.frontmatter.title}</h1>
          <div className={aboutContainer}>
            <p className={about}>{intro[data.mdx.frontmatter.imageId].text}</p>
            <p className={about}>
              {intro[data.mdx.frontmatter.imageId].subsection}
            </p>
            <p className={about}>
              {intro[data.mdx.frontmatter.imageId].subject}{' '}
              <a className={subjectLink} href={intro[data.mdx.frontmatter.imageId].subjectLink}>
                subject.
              </a>
            </p>
          </div>
          <div>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </div>
        </div>
      </Layout>
    </App>
  )
}

export const projectData = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        imageId
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        intro_img {
          childImageSharp {
            gatsbyImageData
          }
        }
        intro_img_alt
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Project
