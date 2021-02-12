import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Headline from '../components/Headline';
import Chart from '../components/Chart';
import Table from '../components/Table';
import axios from 'axios';
import Spinner from '../components/Spinner';

const IndexPage = props => {
  const [petrolData, setPetrolData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://malaysia-petrol-price.herokuapp.com/petrol`)
      .then(response => {
        document.querySelector('#spinner').style.display = 'none';
        setPetrolData(response.data);
      });
  }, []);

  return (
    <>
      <Spinner />
      <Layout>
        <SEO title="Home" />
        <Headline data={petrolData.length > 0 ? petrolData : null} />
        <Chart data={petrolData} />
        <Table data={petrolData.length > 0 ? petrolData : null} />
      </Layout>
    </>
  );
};

export default IndexPage;
