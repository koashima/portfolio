import React from 'react';
import { container } from './layout.module.scss';
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
