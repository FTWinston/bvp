import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

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
        <AudioPlayer
          src={`/${node.frontmatter.mp3}`}
          preload="metadata"
          header={`${node.frontmatter.date}`}
          customVolumeControls={[]}
        />
      )
    }}
  />
)

export default LatestRecording
