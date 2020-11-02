import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HeraldArchive = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex:"/.*/herald/.*/" } },
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 12
        )
        {
          nodes {
            frontmatter{
              title
              pdf
            }
          }
        }
      }
    `}
    render={data => (
      <div className="items style1 medium onscroll-fade-in">
        {data.allMarkdownRemark.nodes.map((node, index: number) => (
          <a href={`/${node.frontmatter.pdf}`} key={index}>
            <span className="icon style2 major fa-file-pdf-o"></span>
            <p className="major">
              {node.frontmatter.title}
            </p>
          </a>
        ))}
      </div>
    )}
  />
)

export default HeraldArchive
