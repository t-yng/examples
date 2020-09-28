import React from 'react';
import { Layout } from '../components/Layout';
import { Router } from '@reach/router';
import { Home } from '../components/app/Home';

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
    </Router>
  </Layout>
);

export default App;