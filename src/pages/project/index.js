import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { projLinks } from './project.module.scss';

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h2>projects of koa</h2>
      <p>check out my projects</p>
      <ul>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.hero_image);
          return (
            <li className={projLinks} key={node.slug}>
              <article>
                <h2>
                  <Link to={node.slug}>{node.frontmatter.title}</Link>
                </h2>
                <GatsbyImage image={image} />
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
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;

export default ProjectPage;
