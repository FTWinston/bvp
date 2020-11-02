import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

interface IProps {
  text: string;
}

const HeraldButton = (props: IProps) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex:"/.*/herald/.*/" } },
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 1
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
    render={data => {
      const node = data.allMarkdownRemark.nodes[0];
      return (
      <li>
        <a href={`/${node.frontmatter.pdf}`} className="button big wide">
          {props.text} ({node.frontmatter.title})
        </a>
      </li>
      )
    }}
  />
)

export default HeraldButton
