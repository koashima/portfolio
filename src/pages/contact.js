import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout';

function Contact() { 
  return (
    <Layout>
      <Header headerText="CONTACT" />
      <h2>Find me on any of these platforms!</h2>
      <ul>
        <li> <a href="https://twitter.com/koashima" target="_blank">twitter</a></li>
        <li> <a href="https://linkedin.com/in/davidshimabukuro" target="_blank">linkedin</a></li>
        <li> <a href="https://github.com/koashima " target="_blank">github</a></li>
      </ul>
    </Layout>
  )
}

export default Contact;