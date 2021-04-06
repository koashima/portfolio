import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout >
      <main>
        <h1>
          <span style={{ color: '#eb5e28' }}>about.</span> 
        </h1>
        <p>
          Koa enjoys creating things, having conversations with people, and
          growing in all ways.
        </p>
        <p>
          If you're reading this,
          <span style={{ color: '#eb5e28' }}> lucky you</span>. If you check
          back I'm sure you will see much improvement to the site, since I am developing this
          site as you read this.
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;
