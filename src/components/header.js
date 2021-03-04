import React from 'react';
import { Link } from 'gatsby';
import { navLinks, navLinkItem } from './header.module.css';
const Header = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/">
            <h1>koa</h1>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about">
            <h2>about</h2>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/contact">
            <h2>contact</h2>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/projects">
            <h2>projects</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
