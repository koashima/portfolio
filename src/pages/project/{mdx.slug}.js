import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const ProjPostTemplate = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <GatsbyImage image={image} />
      <div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      slug
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
      }
      body
    }
  }
`;
export default ProjPostTemplate;
