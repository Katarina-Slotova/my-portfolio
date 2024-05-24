import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { App } from '../components/App'
import Carousel from '../components/Carousel'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  projectContainer,
  projectHeading,
  subheading,
  about,
  subContainerLeft,
  subContainerRight,
  subjectLink,
  twoColumnWrapper,
  additionalInfoContainer,
  tags,
  arrow,
  imgWrapper,
  stackLogoContainer,
  logoImg,
  logoName,
} from './page.module.css'
import { intro, purpose, stack, images, problems } from '../data/data.js'
import { FaArrowRight } from 'react-icons/fa'

function Project({ data, children }) {
  const image = getImage(data.mdx.frontmatter.intro_img)
  console.log(images[data.mdx.frontmatter.imageId].images)

  return (
    <App>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className={projectContainer}>
          <h1 className={projectHeading}>
            {data.mdx.frontmatter.title}&nbsp;&nbsp;
            {intro[data.mdx.frontmatter.imageId].emoji}
          </h1>
          <div className={twoColumnWrapper}>
            <div className={subContainerLeft}>
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
          <div className={imgWrapper}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </div>
          <h2 className={subheading}>Project Purpose & Goal</h2>
          <div className={twoColumnWrapper}>
            <div style={{ width: '50%' }}>
              <p className={about}>
                {purpose[data.mdx.frontmatter.imageId].purpose}
              </p>
              <p className={about}>
                {purpose[data.mdx.frontmatter.imageId].goal}
              </p>
            </div>
          </div>
          <div className={twoColumnWrapper} style={{marginTop: '7rem'}}>
            <div className={subContainerLeft}>
              {stack[data.mdx.frontmatter.imageId].stackImgs.map(
                ({ src, alt, name }) => {
                  return (
                    <div className={stackLogoContainer}>
                      <img
                        src={src}
                        alt={alt}
                        width={50}
                        height={50}
                        className={logoImg}
                      />
                      <p className={logoName}>{name}</p>
                    </div>
                  )
                }
              )}
            </div>
            <div className={subContainerRight}>
              <h2 className={subheading} style={{paddingLeft: '0', marginTop: '0'}}>
                Web Stack & Constraints
              </h2>
              <p className={about} style={{ paddingLeft: '0' }}>
                {stack[data.mdx.frontmatter.imageId].constraints}
              </p>
              <p className={about} style={{ paddingLeft: '0' }}>
                {stack[data.mdx.frontmatter.imageId].stack}
              </p>
            </div>
          </div>
          <h2 className={subheading}>Problems & Thought Process</h2>
          <div className={twoColumnWrapper}>
            <div className={subContainerLeft}>
              <p className={about}>
                {problems[data.mdx.frontmatter.imageId].problems}
              </p>
              <p className={about}>
                {problems[data.mdx.frontmatter.imageId].thoughts}
              </p>
            </div>
            <div className={subContainerRight}></div>
          </div>
          <Carousel images={images[data.mdx.frontmatter.imageId].images} />
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
