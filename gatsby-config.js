module.exports = {
  siteMetadata: {
    title: 'koa',
    description: "koa's website that is a portfolio ",
    author: "David (Koa) Shimabukuro",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/content/project/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Koa`,
        short_name: `Koa`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
