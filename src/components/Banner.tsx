import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Title from './Title';

const BigImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.image.childImageSharp.fluid} className="image" />}
  />
)

const Banner = () => (
  <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
    <div className="content">
      <Title />
      
      <p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
      <ul className="actions stacked">
        <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
      </ul>
    </div>
    
    <BigImage />
  </section>
)

export default Banner
