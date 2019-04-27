import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title';

export default ({ data }) => {
  const summary = data.summary.nodes[0];
  const issues = data.issues.nodes;

  return (
    <Layout>
      <SEO title="Herald archive" />

      <section className="wrapper style1 align-center">
        <div className="inner">
          <Title />

          <h2>{summary.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: summary.html }} />

          <div className="items style1 medium onscroll-fade-in">
            {issues.map((node, index: number) => (
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
  summary: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex:"/.*/fixed/herald.md/" } },
    limit: 1
  )
  {
    nodes {
      frontmatter{
        title
      }
      html
		}
  }
  
  issues: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex:"/.*/herald/.*/" } },
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 12
  )
  {
    nodes {
      frontmatter{
        title
        pdf
      }
    }
    totalCount
  }
}
`