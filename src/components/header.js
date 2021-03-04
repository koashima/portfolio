import React from 'react';
import { Link } from 'gatsby';
import { title, navLinks, navLinkItem } from './header.module.scss';
const Header = () => {
  return (
    <header>
      <h1>
        <Link className={title} to="/">
          K O A 
        </Link>
      </h1>
      <nav>
        <ul className={navLinks}>
          <li>
            <Link className={navLinkItem} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className={navLinkItem} to="/contact">
              contact
            </Link>
          </li>
          <li>
            <Link className={navLinkItem} to="/projects">
              projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
