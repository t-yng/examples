import React from 'react';
import { Router } from '@reach/router';
import { Layout } from '../components/Layout';
import { Login } from '../components/app/Login';
import { Profile } from '../components/app/Profile';
import { PrivateRoute } from '../components/PrivateRoute';

const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute path="/app/profile" component={Profile} />
    </Router>
  </Layout>
);

export default App;
