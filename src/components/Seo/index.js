import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

function Seo({ title }) {
  const data = useSiteMetadata()

  return (
    <title>
      {title} | {data.title}
    </title>
  )
}

export default Seo
