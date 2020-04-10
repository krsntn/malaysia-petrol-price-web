import PropTypes from 'prop-types';
import React from 'react';
import css from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={css.header}>
    <div className={css.container}>
      <h1 className={css.title}>
        {siteTitle}
        <span className={css.remark}>(RM)</span>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
