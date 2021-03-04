import React from 'react';
import { Link } from 'gatsby';
import { container, navLinks, navLinkItem } from './layout.module.css';
const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
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
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
