var path = require('path');
// import path from 'path';

// TODO come back to site metadata
// TODO come back to font loader, check for faster one
module.exports = {
  siteMetadata: {
    title: `Z Club of Texas`,
    description: `Quick Description Needed`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.tsx`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `forSale`,
        path: `${__dirname}/src/content/forSale`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville\:400,400i,700`,
          `Libre Franklin\:300,400,500,700,900`,
        ],
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `events`,
        url: `https://calendar.google.com/calendar/ical/1mbkv206g8se0195p3ko3kbn58%40group.calendar.google.com/public/basic.ics`,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1ZC8jUhsFcllKp00Il2vxyDPsZe4BdtBFieBIZ_1U6CM',
        worksheetTitle: 'Sheet1',
        credentials: require('./client_secret.json'),
      },
    },
    {
      resolve: `@fs/gatsby-plugin-drive`,
      options: {
        folderId: `1XiGIK1W4CHorOVa4-XvQrWM2SnmWU_C3`,
        keyFile: path.resolve(__dirname, 'client_secret.json'),
        destination: path.join(__dirname, `src/content`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
