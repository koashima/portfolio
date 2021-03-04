import React from 'react';
import { container } from './layout.module.css';
import Header from './header';
const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
