import React from 'react';
import { mainContainer, container } from './layout.module.scss';
import Header from './header';
import Footer from './footer';
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={mainContainer}>
      <Header />
      <main className={container}>
        <title>{pageTitle}</title>

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
