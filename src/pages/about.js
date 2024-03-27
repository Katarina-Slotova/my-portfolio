import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function AboutPage() {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm Katarina and I'm the proud creator of this site, which I
        built with Gatsby.
      </p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title='About Me' />
    <meta name='description' content='A portfolio page about me.' />
  </>
)

export default AboutPage
