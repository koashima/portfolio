import React from "react"
import { Link } from "gatsby"
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Link to="/contact/">CONTACT</Link>
      <Header headerText="Koa Shima"/> 
      <p>welcome to my portfolio. Here is a random image</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  ) 
}
