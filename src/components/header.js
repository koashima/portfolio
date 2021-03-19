import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { title, navLinks, navLinkItem } from './header.module.scss';
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header>
      <h1>
        <Link className={title} to="/">
          {data.site.siteMetadata.title}
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
            <Link className={navLinkItem} to="/project">
              projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
