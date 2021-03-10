import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { container, title, navLinks, navLinkItem } from './header.module.scss';
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
    <header className={container}>
      <h1 className={title}>
        <Link className={title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navLinks}>
          <StaticImage
            alt="koa logo"
            src="../images/logo.svg"
            layout="constrained"
            width={100}
            aspectRatio={1 / 1}
          />
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
