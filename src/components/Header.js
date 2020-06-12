import React from 'react';
import { Link } from 'gatsby'; 
import LtDkMode from './LtDkMode';

export default function Header() { 
  return (
    <header style={{display: `flex`, justifyContent: `space-between` }}>
      <Link to="/" style={{ backgroundImage: `none` }}>
      <h2 style={{ display: `inline`, backgroundImage: `none` }}>koa shima</h2>
      </Link>
      <ul>
        <Link to="/contact/">CONTACT</Link>
        <Link to="/">/HOME/</Link>
        <Link to="/about">ABOUT</Link>
      </ul>
      <LtDkMode />
    </header>

  )
}

