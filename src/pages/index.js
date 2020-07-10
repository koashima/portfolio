import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'

function Home() {
  return (
    <Layout>
      <Header />
      <h2>welcome to my portfolio.</h2>
      <p>here is a random image</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  ) 
}

export default Home;