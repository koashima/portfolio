import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout pageTitle="contact koa">
      <h2>
        <span style={{ color: '#eb5e28' }}>contact</span> koa
      </h2>
      <p>contact koa via these methods</p>
      <ul>
        <li>
          <a href="https://github.com/koashima">github</a>
        </li>
        <li>
          <a href="https://twitter.com/koashima">twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/koashima">instagram</a>
        </li>
      </ul>
    </Layout>
  );
};

export default Contact;
