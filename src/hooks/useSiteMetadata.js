import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
