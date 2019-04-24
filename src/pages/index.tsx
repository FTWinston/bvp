import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Grid from '../components/Grid'
import Spotlight from '../components/Spotlight'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`Balshagray`, `Victoria`, `Park`, `Church`, `BVP`]} />
  
    <Banner />

    <Spotlight orient="right" image="assets/images/spotlight01.jpg" id="first">
        <h2>Magna etiam feugiat</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
        <ul className="actions stacked">
          <li><a href="assets/images/spotlight01.jpg" className="button">Learn More</a></li>
        </ul>
    </Spotlight>
    
    <Spotlight orient="left" image="assets/images/spotlight02.jpg">
      <h2>Tempus adipiscing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
      <ul className="actions stacked">
        <li><a href="assets/images/spotlight01.jpg" className="button">Learn More</a></li>
      </ul>
    </Spotlight>

    <Spotlight orient="right" image="assets/images/spotlight03.jpg">
        <h2>Pharetra etiam nulla</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
        <ul className="actions stacked">
          <li><a href="assets/images/spotlight01.jpg" className="button">Learn More</a></li>
        </ul>
    </Spotlight>

    <Gallery />

    <Grid />

    <ContactForm />

    <Footer />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
