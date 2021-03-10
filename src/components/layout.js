import React from 'react';
import { container } from './layout.module.scss';
import Header from './header';
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header />
      <main className={container}>
        <title>{pageTitle}</title>

        {children}
      </main>
    </div>
  );
};

export default Layout