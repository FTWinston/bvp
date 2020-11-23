module.exports = {
  siteMetadata: {
    title: `BVP Church of Scotland`,
    description: `Balshagray Victoria Park`,
    siteUrl: `https://bvp.org.uk/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`,
        ignore: [`**/*\.pdf`], // ignore files ending in .pdf
      },
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
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `balshagray-victoria-park`,
        short_name: `bvp`,
        start_url: `/`,
        background_color: `#003057`,
        theme_color: `#003057`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }        
        `,
        setup: options => ({
          ...options,
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
            googleplay: 'http://www.google.com/schemas/play-podcasts/1.0'
          },
          custom_elements: [
            { 'googleplay:owner': 'ftwinston@gmail.com' },
            { 'itunes:email': 'ftwinston@gmail.com' },
            { 'googleplay:explicit': 'no' },
            { 'itunes:explicit': 'no' },
            { 'language': 'en-gb' }
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                  description: `Recording of church service`,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${node.frontmatter.mp3}`,
                  guid: node.frontmatter.mp3,
                  enclosure: {
                    url: `${site.siteMetadata.siteUrl}/${node.frontmatter.mp3}`,
                  }
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex:"/.*/recordings/.*/" } },
                  sort: { fields: [frontmatter___date], order: DESC },
                  limit: 6
                ) {
                  nodes {
                    frontmatter{
                      title: date(formatString: "dddd, Do MMMM YYYY")
                      date
                      mp3
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Services at BVP Church of Scotland",
            description: "Balshagray Victoria Park morning worship",
            site_url: site.siteMetadata.siteUrl,
            image_url: "https://bvp.org.uk/static/e3b362a3f948fcac3b137939f827f0b2/2244e/building-outside.jpg"
          },
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
