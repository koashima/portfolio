import React from 'react';
import { Link } from 'gatsby'; 
import LtDkMode from './LtDkMode/LtDkMode';

export default function Header({headerText}) { 
  return (
    <>
    <header style={{display: `flex`, justifyContent: `space-between` }}>
      <Link to="/" style={{ backgroundImage: `none` }}>
      <h2 style={{ display: `inline`, backgroundImage: `none` }}>koa shima</h2>
      </Link>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact/">CONTACT</Link>
        <Link to="/projects">PROJECTS</Link>
      </ul>
      <LtDkMode />
    </header>
    <div style={{ display: `flex`, justifyContent: `left`}}>
  <p style={{ margin: `0` }}>{headerText}</p>
    </div>
    </>
  )
}

