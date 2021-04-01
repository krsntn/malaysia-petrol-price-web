import React from 'react';
import css from './spinner.module.scss';

const Spinner = props => {
  return (
    <div id="spinner" className={css.masking}>
      <div className={css.spinner} />
      <div className={css.spinner} />
      <div className={css.spinner} />
      <div className={css.spinner} />
      <div className={css.text}>Don't worry, a few bits of data tried to escape,<br />but we caught them. 😉</div>
    </div>
  );
};
export default Spinner;
