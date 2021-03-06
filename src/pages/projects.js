import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h2>projects of koa</h2>
      <p>check out my projects</p>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.frontmatter.title}>
              <article>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.description}</p>
                <MDXRenderer>{node.body}</MDXRenderer>
              </article>
              <hr />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query ProjPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          description
        }
        body
      }
    }
  }
`;

export default Projects;
