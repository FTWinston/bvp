import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import './Title.scss';

const TitleImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cos.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      imgStyle={{objectFit: 'contain'}}
      className="siteTitle__image"
      critical={true}
    />}
  />
)

const Title = () => (
  <div className="siteTitle">
    <TitleImage />

    <header className="siteTitle__text">
      <h1 className="siteTitle__main"><Link to="/">Balshagray Victoria&nbsp;Park</Link></h1>
      <h2 className="siteTitle__subtitle">Church of Scotland</h2>
    </header>
  </div>
)

export default Title
