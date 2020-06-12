import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'


function Home() {
  return (
    <Layout>
      <Header />
      <p>welcome to my portfolio. Here is a random image</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  ) 
}

export default Home;