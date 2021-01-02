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
              video
            }
          }
        }
      }
    `}
    render={data => {
      const node = data.allMarkdownRemark.nodes[0];
      const url = node.frontmatter.video
        ? node.frontmatter.video
        : `/${node.frontmatter.mp3}`;
      const label = node.frontmatter.video
        ? 'Watch now'
        : 'Listen now';

      return (
      <li>
        <a href={url} className="button big wide">
          {label} ({node.frontmatter.date})
        </a>
      </li>
      )
    }}
  />
)

export default RecordingButton
