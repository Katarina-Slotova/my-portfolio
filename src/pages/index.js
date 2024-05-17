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
import { heading, container } from './project.module.css'

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

  /*    isOnScreen.map((section, id) => {
    if (section && isOnScreen.indexOf(section) === id) {
      const sectionId = id + 1
      document.location.replace(`#section${sectionId}`)
    }
  })  */

  return (
    <App>
      <Layout isOnScreen={isOnScreen}>
        <div className={container} style={{ backgroundColor: '#e8e8f3' }}>
          <h1 ref={sectionOneRef}>{}</h1>
          <Introduction />
        </div>

        <div className={container}>
          <h1 ref={sectionTwoRef} id='skills' style={{ margin: '0' }}>
            {}
          </h1>
          <h1 className={heading}>Skills & Experiences</h1>
          <Skills />
        </div>

        <div className={container}>
          <h1 ref={sectionThreeRef} id='projects' style={{ margin: '0' }}>
            {}
          </h1>
          <h1 className={heading}>Selected Projects</h1>
          <Projects data={data} />
        </div>

        <div
          className={container}
          style={{
            backgroundColor: '#e8e8f3',
            /* marginBottom: '0', */
          }}
        >
          <h1 style={{ margin: '0' }}>{}</h1>
          <h1 ref={sectionFourRef} id='contact' className={heading}>
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
