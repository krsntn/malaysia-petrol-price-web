import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/index';
import css from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Malaysia Petrol Price`} />
      <div className={css.mainDiv}>
        <main>{children}</main>
        <footer className={css.footer}>
          © 2020, Built by
          {` `}
          <a href="https://dev.krsn.xyz">Karson</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
