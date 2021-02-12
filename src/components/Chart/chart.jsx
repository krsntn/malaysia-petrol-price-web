import React, { useEffect } from 'react';
import css from './chart.module.scss';
import Chart from 'chart.js';

const ChartBox = ({ data }) => {
  const generateChart = data => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data
          .map(x => x.from)
          .reverse()
          .slice(-10),
        datasets: [
          {
            label: 'ron95',
            data: data
              .map(x => x.ron95)
              .reverse()
              .slice(-10),
            borderWidth: 3,
            borderColor: 'rgba(255,255,0)',
          },
          {
            label: 'ron97',
            data: data
              .map(x => x.ron97)
              .reverse()
              .slice(-10),
            borderWidth: 3,
            borderColor: 'rgba(0,255,0)',
          },
          {
            label: 'diesel',
            data: data
              .map(x => x.diesel)
              .reverse()
              .slice(-10),
            borderWidth: 3,
            borderColor: 'rgba(0,0,0)',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              stacked: false,
            },
          ],
        },
      },
    });
  };

  useEffect(() => {
    generateChart(data);
  }, [data]);

  return (
    <canvas
      id="myChart"
      width="100%"
      height="50"
      className={css.chart}
    ></canvas>
  );
};

export default ChartBox;
