/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../../static/favicon.ico';

function SEO() {
  return (
    <Helmet defer={false}>
      <link rel="icon" href={favicon} />

      {/* <!-- Primary Meta Tags --> */}
      <title>Malaysia Petrol Price - Latest</title>
      <meta name="title" content="Malaysia Petrol Price - Latest" />
      <meta
        name="description"
        content="Check out and keep track of latest petrol, diesel and other fuel prices in Malaysia."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://petrol.karson.tk/" />
      <meta property="og:title" content="Malaysia Petrol Price - Latest" />
      <meta
        property="og:description"
        content="Check out and keep track of latest petrol, diesel and other fuel prices in Malaysia."
      />
      <meta
        property="og:image"
        content="https://media1.thehungryjpeg.com/thumbs/800_3487793_970b4098ef2d07dc43667237edebdc2f13c2fe08.jpg"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://petrol.karson.tk/" />
      <meta property="twitter:title" content="Malaysia Petrol Price - Latest" />
      <meta
        property="twitter:description"
        content="Check out and keep track of latest petrol, diesel and other fuel prices in Malaysia."
      />
      <meta
        property="twitter:image"
        content="https://media1.thehungryjpeg.com/thumbs/800_3487793_970b4098ef2d07dc43667237edebdc2f13c2fe08.jpg"
      />
    </Helmet>
  );
}

export default SEO;
