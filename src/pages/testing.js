import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <h1>Julie website</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
