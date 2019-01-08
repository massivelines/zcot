// TODO come back to site metadata
module.exports = {
  siteMetadata: {
    title: `Z Club of Texas`,
    description: `Quick Description Needed`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Z Club of Texas`,
        short_name: `Z Club of Texas`,
        start_url: `/`,
        background_color: `#00539b`,
        theme_color: `#00539b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
