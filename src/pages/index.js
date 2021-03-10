import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <h2>
        <span style={{ color: '#eb5e28' }}>welcome</span> to koa
      </h2>
      <div>
        <p>this is the main page</p>
        <p>here is my logo it's a little blurry right now :( </p>
        <StaticImage
          alt="koa logo"
          src="../images/logo.svg"
          layout="constrained"
          width={200}
          aspectRatio={1 / 1}
        />
        <p>I do not know what to put on the main page right now</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
