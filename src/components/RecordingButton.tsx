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
        <a href={node.frontmatter.mp3} className="button big wide">
          {props.text} ({node.frontmatter.date})
        </a>
      </li>
      )
    }}
  />
)

export default RecordingButton
