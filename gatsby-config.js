const website = require("./config/website") 

module.exports = {
  siteMetadata: {
    title: website.title,
    description: website.description,
    siteUrl: website.siteUrl,
    image: website.image,
    owner: website.owner,
    twitterUsername: website.twitterUsername,
    facebookAppID: "",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-react-helmet",
  ],
}
