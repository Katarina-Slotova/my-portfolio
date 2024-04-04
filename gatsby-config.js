/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quattrocento sans`,
          `satisfy`,
          `playfair display`,
          `raleway`,
          `alegreya sans`,
          `league spartan\:300,400,500,600,700`,
          `reenie beanie`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
