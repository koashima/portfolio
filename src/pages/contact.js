import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

export default function Contact() { 
  return (
    <div>
      <Link to="/">HOME</Link>
      <Header headerText="CONTACT" />
      <p>Find me on any of these platforms!</p>
    </div>
  )
}