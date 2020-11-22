import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const LatestRecording = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex:"/.*/recordings/.*/" } },
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 1
        )
        {
          nodes {
            frontmatter{
              date(formatString: "Do MMMM")
              mp3
            }
          }
        }
      }
    `}
    render={data => {
      const node = data.allMarkdownRemark.nodes[0];
      return (
        <figure className="recording">
          <figcaption>{`${node.frontmatter.date}`}</figcaption>
          <audio
            controls
            preload="metadata"
            src={`/${node.frontmatter.mp3}`}>
              <a href={`/${node.frontmatter.mp3}`}>Download</a>
          </audio>
        </figure>
      )
    }}
  />
)

export default LatestRecording
