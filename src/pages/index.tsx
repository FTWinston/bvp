import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import AllHomepageSections from '../components/AllHomepageSections';

export default () => (
    <Layout isHomePage={true}>
        <SEO title='Home' keywords={[`Balshagray`, `Victoria`, `Park`, `Church`, `BVP`]} />
        
        <AllHomepageSections />
    </Layout>
)