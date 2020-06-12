import React from "react"
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header headerText="Koa Shima"/> 
      <p>welcome to my portfolio. Here is a random image</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  ) 
}

export default Home;