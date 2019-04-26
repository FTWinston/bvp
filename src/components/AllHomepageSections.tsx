import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Button from './Button';
import Spotlight from './Spotlight'
import TextSection from './TextSection';

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
          image
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
      const id = isFirst ? 'first' : undefined;
      isFirst = false;
  
      const title = <h2>{node.frontmatter.title}</h2>
      const content = <div dangerouslySetInnerHTML={{ __html: node.html }} />
      const buttons = node.frontmatter.buttons === null
        ? undefined
        : <ul className="actions">
        {node.frontmatter.buttons.map((btn, index: number) =>
          <Button key={index} target={btn.target}>{btn.text}</Button>
        )}
      </ul>
      
      return node.frontmatter.image === null
        ? (
          <TextSection
            id={id}
            key={index}
          >
            {title}
            {content}
            {buttons}
          </TextSection>
        )
        : (
        <Spotlight
          orient={index % 2 === 0 ? 'right' : 'left'}
          image={node.frontmatter.image}
          id={id}
          key={index}
        >
          {title}
          {content}
          {buttons}
        </Spotlight>
        )
    })
  }}
/>