import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

interface IProps {
  text: string;
}

const RecordingButton = (props: IProps) => (
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
      <li>
        <figure>
          <figcaption>{node.frontmatter.date}</figcaption>
          <audio controls src={`/${node.frontmatter.mp3}`} preload="metadata">
            <a href={`/${node.frontmatter.mp3}`}>Download</a>
          </audio>
        </figure>
      </li>
      )
    }}
  />
)

export default RecordingButton
