import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { App } from '../components/App'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  heading,
  about,
  aboutContainer,
  subjectLink,
  twoColumnWrapper,
  additionalInfoContainer,
  tags,
	arrow
} from './project.module.css'
import { intro } from '../data/data.js'
import { FaArrowRight } from 'react-icons/fa'

function Project({ data, children }) {
  const image = getImage(data.mdx.frontmatter.intro_img)

  return (
    <App>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className={container}>
          <h1 className={heading}>{data.mdx.frontmatter.title}&nbsp;&nbsp;{intro[data.mdx.frontmatter.imageId].emoji}</h1>
          <div className={twoColumnWrapper}>
            <div className={aboutContainer}>
              <p className={about}>
                {intro[data.mdx.frontmatter.imageId].text}
              </p>
              <p className={about}>
                {intro[data.mdx.frontmatter.imageId].subsection}
              </p>
              <p className={about}>
                {intro[data.mdx.frontmatter.imageId].subject}{' '}
                <a
                  className={subjectLink}
                  href={intro[data.mdx.frontmatter.imageId].subjectLink}
                >
                  subject.
                </a>
              </p>
            </div>
            <div className={additionalInfoContainer}>
              <div>
                <h4 style={{ marginTop: '0', textTransform: 'uppercase' }}>
                  Type
                </h4>
                <p>{intro[data.mdx.frontmatter.imageId].type}</p>
              </div>
              <div>
                <h4 style={{ marginTop: '0', textTransform: 'uppercase' }}>
                  Stack
                </h4>
                <ul className={tags}>
                  {data.mdx.frontmatter.tags.map((tag, id) => (
                    <li key={id}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ marginTop: '0', textTransform: 'uppercase' }}>
                  Repository
                </h4>
                <a
                  className={subjectLink}
                  href='https://github.com/Katarina-Slotova/Camagru-hive'
                >
                  View on Github <FaArrowRight className={arrow} />
                </a>
              </div>
            </div>
          </div>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
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
        tags
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
