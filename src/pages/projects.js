import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h2>projects of koa</h2>
      <p>check out all my projects</p>
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query ProjPosts {
    allFile(
      filter: { dir: { regex: "/content/projects/" }, ext: { regex: "/.mdx/" } }
    ) {
      nodes {
        extension
        name
      }
    }
  }
`;

export default Projects;
