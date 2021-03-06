import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

const ProjPostTemplate = ({ data }) => {
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      slug
      frontmatter {
        title
        hero_image
        description
      }
      body
    }
  }
`;
export default ProjPostTemplate;
