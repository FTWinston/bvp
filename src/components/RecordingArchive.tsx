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
              mp3
              video
            }
          }
        }
      }
    `}
    render={data => (
      <div className="items style1 medium onscroll-fade-in">
        {data.allMarkdownRemark.nodes.map((node, index: number) => {
          const url = node.frontmatter.video
            ? node.frontmatter.video
            : `/${node.frontmatter.mp3}`;
          const icon = node.frontmatter.video
            ? 'icon style2 major fa-youtube'
            : 'icon style2 major fa-file-audio-o';

          return (
          <a href={url} key={index}>
            <span className={icon}></span>
            <p className="major align-center">
              {node.frontmatter.date}
            </p>
          </a>
        )})}
      </div>
    )}
  />
)

export default RecordingArchive
