import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './LatestRecording.scss';

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
          <figcaption className="recording__caption">Latest recording: <span className="recording__title">{`${node.frontmatter.date}`}</span></figcaption>
          <audio
            className="recording__audio"
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
