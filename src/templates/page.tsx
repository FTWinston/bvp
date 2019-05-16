import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title';
import HeraldArchive from '../components/HeraldArchive';
import ContactForm from '../components/ContactForm';

export default ({ data }) => {
  const post = data.markdownRemark

  let functionality;
  switch (post.frontmatter.functionality) {
    case 'list magazines':
      functionality = <HeraldArchive />
      break
    case 'contact form':
      functionality = <ContactForm />
      break
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <section className="wrapper style1 align-center">
        <div className="inner">
          <Title />

          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {functionality}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      functionality
    }
    html
  }
}
`