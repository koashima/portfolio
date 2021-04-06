import * as React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        <span style={{ color: '#eb5e28' }}>welcome</span> to koa
      </h1>
      <div>
        <h3>I am a full-stack developer.</h3>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default IndexPage;
