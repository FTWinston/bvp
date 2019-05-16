import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import AllHomepageSections from '../components/AllHomepageSections';
import Button from '../components/Button';
import PageSection from '../components/PageSection';

export default ({ data }) => {
    const nodes = data.allMarkdownRemark.nodes;
    const footerButtonSection = nodes.length === 0
        ? undefined
        : <PageSection
            className="wrapper style1 align-center"
            innerClassName="inner"
            isFirst={false}
        >
            <h2>Other pages</h2>

            <ul className="actions">
            {nodes.map((node, index: number) =>
                <Button key={index} target={node.fields.slug}>{node.frontmatter.title}</Button>
            )}
            </ul>
        </PageSection>

    return (
    <Layout isHomePage={true}>
        <SEO title='Home' keywords={[`Balshagray`, `Victoria`, `Park`, `Church`, `BVP`]} />
        
        <AllHomepageSections />

        {footerButtonSection}
    </Layout>
    )
}

export const query = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___title], order: ASC },
    filter: {
      fileAbsolutePath: { regex: "/.*/pages/.*/" }
      frontmatter: {
        listed: { eq: true }
      }
    }
  )
  {
    nodes {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
}
`