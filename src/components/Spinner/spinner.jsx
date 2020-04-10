import React from 'react';
import css from './spinner.module.scss';

const Spinner = props => {
  return (
    <div id="spinner" className={css.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
