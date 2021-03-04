import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="koa">
      <h1>welcome to koa</h1>
      <div>
        <p>this is the main page</p>
        <p>here is my logo </p>
        <StaticImage
          alt="koa logo"
          src="../images/logo.svg"
          layout="constrained"
          width={100}
          aspectRatio={1 / 1}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
