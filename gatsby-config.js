module.exports = {
  siteMetadata: {
    title: `BitPolimi`,
    description: `La prima associazione del Politecnico di Milano che si occupa di Bitcoin e crypto. Proponiamo progetti innovativi in grado di formarti su questo nuovo mondo.`,
    siteUrl: `https://www.bitpolimi.it`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#FF914D",
      },
    },
  ],
}
