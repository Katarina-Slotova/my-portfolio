import React from 'react'
import { Link } from 'gatsby'
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
  redirect,
  subContainerStackVisible,
  subContainerStackHidden,
  hiddenCarousel,
} from './page.module.css'
import { intro, purpose, stack, images, problems } from '../data/data.js'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

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
          <div className={twoColumnWrapper} style={{ marginTop: '2.5rem' }}>
            <div className={subContainerLeft}>
              <p className={about}>
                {intro[data.mdx.frontmatter.imageId].text}
              </p>
              <p className={about}>
                {intro[data.mdx.frontmatter.imageId].subsection}
              </p>
              <p className={about}>
                For more information about this project, check out the{' '}
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
                <p style={{ marginTop: '0', marginBottom: '1.5rem' }}>
                  {intro[data.mdx.frontmatter.imageId].type}
                </p>
              </div>
              <div>
                <h4 style={{ marginTop: '0', textTransform: 'uppercase' }}>
                  Stack
                </h4>
                <ul
                  className={tags}
                  style={{ marginTop: '0', marginBottom: '1.5rem' }}
                >
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
                  href={intro[data.mdx.frontmatter.imageId].repoLink}
                  style={{ marginTop: '0', marginBottom: '1.5rem' }}
                  target='_blank'
                  rel='noreferrer'
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
          <div className={twoColumnWrapper}>
            <div className={subContainerLeft}>
              <h2 className={subheading}>Project Purpose & Goal</h2>
              <p className={about}>
                {purpose[data.mdx.frontmatter.imageId].purpose}
              </p>
              <p className={about}>
                {purpose[data.mdx.frontmatter.imageId].goal}
              </p>
            </div>
            <div className={subContainerRight}></div>
          </div>
          <div className={twoColumnWrapper}>
            <div className={subContainerStackVisible}>
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
              <h2 className={subheading} style={{ marginTop: '0' }}>
                Web Stack & Constraints
              </h2>
              <p className={about}>
                {stack[data.mdx.frontmatter.imageId].constraints}
              </p>
              <p className={about}>
                {stack[data.mdx.frontmatter.imageId].stack}
              </p>
              {data.mdx.frontmatter.imageId === 2 ? (
                <p className={about}>
                  You can view my C library{' '}
                  <a
                    className={subjectLink}
                    href='https://github.com/Katarina-Slotova/ft_printf-hive/tree/main/libft'
                    target='_blank'
                    rel='noreferrer'
                  >
                    here.
                  </a>{' '}
                  The set of tests I wrote to test proper functionality of the
                  library, including a short shell script that automatically
                  runs all the tests can be found{' '}
                  <a
                    href='https://github.com/Katarina-Slotova/42libft-tests'
                    target='_blank'
                    rel='noreferrer'
                    className={subjectLink}
                  >
                    here
                  </a>
                  .
                </p>
              ) : (
                ''
              )}
            </div>
            <div className={subContainerStackHidden}>
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
          </div>
          <div className={twoColumnWrapper}>
            <div className={subContainerLeft}>
              <h2 className={subheading}>Problems & Thought Process</h2>
              <p className={about}>
                {problems[data.mdx.frontmatter.imageId].thoughts}
              </p>
              <p className={about}>
                {problems[data.mdx.frontmatter.imageId].problems}
              </p>
            </div>
            <div className={subContainerRight}></div>
          </div>
          {images[data.mdx.frontmatter.imageId].images.length === 0 ? (
            ''
          ) : (
            <Carousel images={images[data.mdx.frontmatter.imageId].images} />
          )}
          <div className={redirect}>
            <Link className={subjectLink} href='/#projects'>
              <FaArrowLeft className={arrow} /> Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    </App>
  )
}

/* className={`${
              images[data.mdx.frontmatter.imageId].images.length === 0
                ? console.log('hidden')
                : console.log('not hidden')
            }`} */

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
