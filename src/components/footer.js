import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './footer.module.scss'
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <h5>Created by {data.site.siteMetadata.author}, © 2021</h5>
      <div>
        <StaticImage
          alt="koa logo"
          src="../images/logo.svg"
          layout="constrained"
          width={50}
          aspectRatio={1 / 1}
        />
      </div>
    </footer>
  );
};

export default Footer;
