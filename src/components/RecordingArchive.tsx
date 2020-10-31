import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const RecordingArchive = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex:"/.*/recordings/.*/" } },
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 6
        )
        {
          nodes {
            frontmatter{
              date(formatString: "dddd, Do MMMM YYYY")
              mp3 {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="items style1 medium onscroll-fade-in">
        {data.allMarkdownRemark.nodes.map((node, index: number) => (
          <a href={node.frontmatter.mp3.publicURL} key={index}>
            <span className="icon style2 major fa-file-audio-o"></span>
            <p className="major">
              {node.frontmatter.date}
            </p>
          </a>
        ))}
      </div>
    )}
  />
)

export default RecordingArchive
