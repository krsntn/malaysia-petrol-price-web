import React from 'react';
import css from './table.module.scss';

const table = ({ data }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>From</th>
            <th>Through</th>
            <th>RON95</th>
            <th>RON97</th>
            <th>DIESEL</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((week, i) => {
              return (
                <tr key={i}>
                  <td>{week.from}</td>
                  <td>{week.through}</td>
                  <td>{week.ron95}</td>
                  <td>{week.ron97}</td>
                  <td>{week.diesel}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="100%">...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default table;
