const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions

//     const createPagesForDirectories = [
//         'pages',
//     ];

//     return graphql(`
//     {
//         allMarkdownRemark(
//             filter: { fileAbsolutePath: { regex:"/.\/*(${createPagesForDirectories.join('|')})\/.*/" } },
//         )
//         {
//             edges {
//                 node {
//                     fields {
//                         slug
//                     }
//                 }
//             }
//         }
//     }`
//     ).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: path.resolve(`./src/templates/articleTemplate.js`),
//                 context: {
//                     // Data passed to context is available
//                     // in page queries as GraphQL variables.
//                     slug: node.fields.slug,
//                 },
//             })
//         })
//     })
// }