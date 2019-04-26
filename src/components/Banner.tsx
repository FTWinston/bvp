import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Title from './Title';
import Button from './Button';
import './Banner.scss';

const Banner = () => (
  <StaticQuery
  query={graphql`
    query {
      summary: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex:"/.*/fixed/intro.md/" } },
        limit: 1
      )
      {
        nodes {
          frontmatter {
            buttons {
              text
              target
            }
          }
          html
        }
      }
      
      image: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => {
    const summary = data.summary.nodes[0];
    const image = data.image;

    const content = <div dangerouslySetInnerHTML={{ __html: summary.html }} />

    const buttons = summary.frontmatter.buttons == null
        ? undefined
        : <ul className="actions">
        {summary.frontmatter.buttons.map((btn, index: number) =>
          <Button key={index} target={btn.target}>{btn.text}</Button>
        )}
      </ul>

    return (
      <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <Title />
          
          {content}
          {buttons}
        </div>
        
        <Img fluid={image.childImageSharp.fluid} className="image" />
      </section>
    )}
  }
/>
)

export default Banner
