import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="about koa">
      <main>
        <h2>
          <span style={{ color: '#eb5e28' }}>about</span> koa
        </h2>
        <p>
          koa enjoys creating things, having conversations with people, and
          growing in all ways.
        </p>
        <p>
          if you're reading this,
          <span style={{ color: '#eb5e28' }}> lucky you</span> . if you check
          back i'm sure you will see much improvement since i am developing this
          site as you read this.
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;
