import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h2>projects of koa</h2>
      <p>check out my projects</p>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.slug}>
              <article>
                <h2>
                  <Link to={node.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.description}</p>
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
    allMdx(sort: { fields: slug }) {
      nodes {
        frontmatter {
          title
          description
        }
        slug
      }
    }
  }
`;

export default ProjectPage;
