require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: 'Austin Sharman',
    siteTitleAlt: `Austin Sharman's Personal Site`,
    siteDescription: `Posts that explore writing software for the web, learning, and teaching among other things`,
    author: 'Austin Sharman',
    siteImage: '/banner.jpg',
    siteUrl: 'https://austinsharman.com',
    siteLanguage: 'en',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: 'MM.DD.YYYY',
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/sharman_austin`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/austin-sharman/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Austin Sharman`,
        short_name: `austinsharman.com`,
        description: `Posts that explore writing software for the web, learning, and teaching among other things`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
