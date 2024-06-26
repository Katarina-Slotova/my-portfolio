import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'
import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import { App } from '../components/App'
import useIsOnScreen from '../hooks/useIsOnScreen'
import { sectionHeading, container, narrowContainer } from './page.module.css'

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
        <div className={container} style={{ backgroundColor: '#e8e8f3' }}>
          <h1 ref={sectionOneRef}>{}</h1>
          <Introduction />
        </div>

        <div className={narrowContainer}>
          <h1 ref={sectionTwoRef} id='skills' style={{ margin: '0' }}>
            {}
          </h1>
          <h1 className={sectionHeading}>Skills & Experiences</h1>
          <Skills />
        </div>

        <div className={narrowContainer}>
          <h1 ref={sectionThreeRef} id='projects' style={{ margin: '0' }}>
            {}
          </h1>
          <h1 className={sectionHeading}>Selected Projects</h1>
          <Projects data={data} />
        </div>

        <div
          className={container}
          style={{
            backgroundColor: '#e8e8f3',
          }}
        >
          <h1 style={{ margin: '0' }}>{}</h1>
          <h1 ref={sectionFourRef} id='contact' className={sectionHeading}>
            Let's get in touch!
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
          description
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          imageId
          hero_image_alt
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title='Home Page' />

export default IndexPage
