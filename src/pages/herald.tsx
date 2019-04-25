import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Herald archive" />

      <section className="wrapper style1 align-center">
        <div className="inner">
          <Title />

          <h2>Herald magazine archive</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
          
          <div className="items style1 medium onscroll-fade-in">
            {/*<h4>{data.allMarkdownRemark.totalCount} issues</h4>*/}
            {data.allMarkdownRemark.edges.map(({node}, index: number) => (
              <a href={node.frontmatter.pdf} key={index}>
                <span className="icon style2 major fa-save"></span>
                <p className="major">
                  {node.frontmatter.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex:"/.*/herald/.*/" } },
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 12
  )
  {
    edges {
      node {
        frontmatter{
          title
          pdf
        }
      }
    }
    totalCount
  }
}
`