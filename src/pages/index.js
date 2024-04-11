import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import AboutPage from '../components/About'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'
import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import { App } from '../components/App'
import useIsOnScreen from '../hooks/useIsOnScreen'
import { heading, container } from './page.module.css'

const IndexPage = ({ data }) => {
  const sectionOneRef = React.useRef()
  const sectionTwoRef = React.useRef()
  const sectionThreeRef = React.useRef()
  const sectionFourRef = React.useRef()
  const isFirstOnScreen = useIsOnScreen(sectionOneRef)
  const isSecondOnScreen = useIsOnScreen(sectionTwoRef)
  const isThirdOnScreen = useIsOnScreen(sectionThreeRef)
  const isFourthOnScreen = useIsOnScreen(sectionFourRef)

  const isOnScreen = [
    isFirstOnScreen,
    isSecondOnScreen,
    isThirdOnScreen,
    isFourthOnScreen,
  ]

  return (
    <App>
      <Layout isOnScreen={isOnScreen}>
        <div className={container}>
          <h1 className={heading} ref={sectionOneRef}></h1>
          <Introduction />
        </div>

        <div className={container}>
          <h1 className={heading} ref={sectionTwoRef} id='section2'>
            About Me
          </h1>
          <AboutPage />
        </div>

        <div className={container}>
          <h1 className={heading} ref={sectionThreeRef} id='section3'>
            Projects
          </h1>
          <Projects data={data} />
        </div>

        <div className={container}>
          <h1 className={heading} ref={sectionFourRef} id='section4'>
            Contact
          </h1>
          <Contact />
        </div>
      </Layout>
    </App>
  )
}

export const projectsInfo = graphql`
  query {
    allMdx(sort: { frontmatter: { imageId: ASC } }) {
      nodes {
        frontmatter {
          title
          slug
          tags
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          imageId
          hero_image_alt
        }
        excerpt
        id
      }
    }
  }
`

export const Head = () => <Seo title='Home Page' />

export default IndexPage
