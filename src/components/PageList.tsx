import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const PageList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: ASC },
          filter: {
            fileAbsolutePath: { regex: "/.*/pages/.*/" }
          }
        )
        {
          nodes {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <table>
        <tr>
          <th>Page name</th>
          <th>Address</th>
        </tr>
        {data.allMarkdownRemark.nodes.map((node, index: number) => (
          <tr key={index}>
            <td>{node.frontmatter.title}</td>
            <td><a href={node.fields.slug}>{node.fields.slug}</a></td>
          </tr>
        ))}
      </table>
    )}
  />
)

export default PageList
