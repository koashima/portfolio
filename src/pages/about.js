import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>
          <span style={{ color: '#eb5e28' }}>about.</span>
        </h1>
        <h2>
          Hello, my name is Koa. 
          <br />
          <br /> 
          I am a freelance web developer, who also offers
          digital support services.
          <br />
          <br />
          Please fill out the form on the homepage to reach out.
          <br/>
          <br/>
          You can do this by clicking or pressing the <span style={{ color: '#eb5e28' }}> koa</span> on the top left corner of the screen.
          <br/>
          <br/>
          Alternatively, you can also check out the <span style={{ color: '#eb5e28' }}>contact</span> page for links to my online social presence.
          <br/>
          <br/>
          Don't miss checking out some of the <span style={{ color: '#eb5e28' }}>projects</span> I've created. 
          <br/>
          Please note that this is not a comprehensive list.
        </h2>
      </main>
    </Layout>
  );
};

export default AboutPage;
