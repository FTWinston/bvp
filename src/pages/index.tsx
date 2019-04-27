import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import Gallery from '../components/Gallery'
import Grid from '../components/Grid'
import AllHomepageSections from '../components/AllHomepageSections';

export default () => (
  <Layout isHomePage={true}>
    <SEO title='Home' keywords={[`Balshagray`, `Victoria`, `Park`, `Church`, `BVP`]} />
    
    <AllHomepageSections />

{/*
    <Spotlight orient="right" image="assets/images/spotlight01.jpg" id="first">
      <h2>Magna etiam feugiat</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
      <ul className="actions stacked">
        <li><a href="assets/images/spotlight01.jpg" className="button">Learn More</a></li>
      </ul>
    </Spotlight>

    <Gallery />

    <Grid />
*/}
    <ContactForm />
  </Layout>
)