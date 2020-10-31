import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title';
import HeraldArchive from '../components/HeraldArchive';
import RecordingArchive from '../components/RecordingArchive';
import ContactForm from '../components/ContactForm';
import PageList from '../components/PageList';

export default ({ data }) => {
  const post = data.markdownRemark

  let functionality;
  switch (post.frontmatter.functionality) {
    case 'list magazines':
      functionality = <HeraldArchive />
      break
    case 'list recordings':
      functionality = <RecordingArchive />
      break
    case 'contact form':
      functionality = <ContactForm />
      break
    case 'list all pages':
      functionality = <PageList />
      break
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <section className="wrapper style1">
        <div className="inner">
          <Title />

          <h2 className="align-center">{post.frontmatter.title}</h2>
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