import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Button from './Button';
import PageSection from './PageSection'
import { FluidObject } from 'gatsby-image';

export default () => 
<StaticQuery
  query={graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex:"/.*/sections/.*/" } },
      sort: {  fields: [ frontmatter___order ], order: ASC }
    )
    {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          buttons {
            text
            target
          }
        }
        html
      }
    }
  }
  `}
  render={data => {
    let isFirst = true;

    return data.allMarkdownRemark.nodes.map((node, index: number) => {
      const id = isFirst ? 'first' : undefined
      isFirst = false

      let classes: string, innerClass: string
      let image: FluidObject | undefined
      
      if (node.frontmatter.image == null) {
        innerClass = 'inner' // would be good to rewrite the styling to avoid the need for this
        classes = 'wrapper style1 align-center'
        image = undefined;
      }
      else {
        innerClass = 'content'
        classes = index % 2 === 0
          ? 'spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'
          : 'spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'
        image = node.frontmatter.image.childImageSharp.fluid
      }
  
      const title = <h2>{node.frontmatter.title}</h2>
      const content = <div dangerouslySetInnerHTML={{ __html: node.html }} />
      const buttons = node.frontmatter.buttons == null
        ? undefined
        : <ul className="actions">
        {node.frontmatter.buttons.map((btn, index: number) =>
          <Button key={index} target={btn.target}>{btn.text}</Button>
        )}
      </ul>
      
      return (
        <PageSection
          className={classes}
          innerClassName={innerClass}
          image={image}
          id={id}
          key={index}
        >
          {title}
          {content}
          {buttons}
        </PageSection>
      )
    })
  }}
/>