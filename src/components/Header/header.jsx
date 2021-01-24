import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import css from './header.module.scss';

const Header = ({ siteTitle }) => {
  const [dot, setDot] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setDot(prev => (prev % 3) + 1);
    }, 1000);
  }, [dot]);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.title}>
          {siteTitle}
          <pre className={css.remark}>
            (Live{'.'.repeat(dot)}
            {' '.repeat(3 - dot)})
          </pre>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
