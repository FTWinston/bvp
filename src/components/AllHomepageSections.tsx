import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Button from './Button';
import PageSection from './PageSection'
import Title from './Title'
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
              fluid(maxWidth: 1600) {
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
    return data.allMarkdownRemark.nodes.map((node, index: number) => {
      const id = `section${index+1}`
      let classes: string, innerClass: string
      let image: FluidObject | undefined
      
      if (node.frontmatter.image == null) {
        innerClass = 'inner' // would be good to rewrite the styling to avoid the need for this property
        classes = 'wrapper style1 align-center'
        image = undefined;
      }
      else {
        innerClass = 'content'
        if (index === 0) {
          classes = 'banner orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right';
        }
        else {
          classes = `spotlight style1 orient-${index % 2 === 0 ? 'left' : 'right'} content-align-left image-position-center onscroll-image-fade-in`
        }
        image = node.frontmatter.image.childImageSharp.fluid
      }
  
      const title = index === 0
        ? <Title />
        : <h2>{node.frontmatter.title}</h2>
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
          isFirst={index === 0}
        >
          {title}
          {content}
          {buttons}
        </PageSection>
      )
    })
  }}
/>