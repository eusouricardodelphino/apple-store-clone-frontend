import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Routes from './Routes';
import GlobalStyles from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>

    <GlobalStyles />
  </>
);

export default App;
