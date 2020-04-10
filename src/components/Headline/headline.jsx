import React from 'react';
import css from './headline.module.scss';

const headline = ({ data }) => {
  let headlineData = null;
  let ron95Diff, ron97Diff, dieselDiff;
  if (data && data.length > 0) {
    headlineData = data[0];

    ron95Diff = (parseFloat(data[0].ron95) - parseFloat(data[1].ron95)).toFixed(
      2
    );
    ron97Diff = (parseFloat(data[0].ron97) - parseFloat(data[1].ron97)).toFixed(
      2
    );
    dieselDiff = (
      parseFloat(data[0].diesel) - parseFloat(data[1].diesel)
    ).toFixed(2);
  }

  return (
    <div className={css.container}>
      <div className={css.card}>
        <div>
          <div className={css.title}>RON95</div>
          <div className={css.number}>
            <div className={css.price}>
              {headlineData ? headlineData.ron95 : '...'}
            </div>
            <div
              className={css.diff}
              data-positive={ron95Diff > 0}
              data-negative={ron95Diff < 0}
            >
              {ron95Diff}
            </div>
          </div>
        </div>
      </div>
      <div className={css.card}>
        <div>
          <div className={css.title}>RON97</div>
          <div className={css.number}>
            <div className={css.price}>
              {headlineData ? headlineData.ron97 : '...'}
            </div>
            <div
              className={css.diff}
              data-positive={ron95Diff > 0}
              data-negative={ron95Diff < 0}
            >
              {ron97Diff}
            </div>
          </div>
        </div>
      </div>
      <div className={css.card}>
        <div>
          <div className={css.title}>DIESEL</div>
          <div className={css.number}>
            <div className={css.price}>
              {headlineData ? headlineData.diesel : '...'}
            </div>
            <div
              className={css.diff}
              data-positive={ron95Diff > 0}
              data-negative={ron95Diff < 0}
            >
              {dieselDiff}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default headline;
