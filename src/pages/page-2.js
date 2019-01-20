import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p> I am here new</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/testing/">Go to page 3</Link>
    </div>
  </Layout>
);

export default SecondPage;
