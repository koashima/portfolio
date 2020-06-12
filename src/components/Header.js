import React from 'react';
import { Link } from 'gatsby'; 

export default function Header(props) { 
  return (
    <div>
      <Link to="/contact/">CONTACT</Link>
      <Link to="/">/HOME/</Link>
      <Link to="/about">ABOUT</Link>
      <h1>{props.headerText}</h1>
    </div>

  )
}