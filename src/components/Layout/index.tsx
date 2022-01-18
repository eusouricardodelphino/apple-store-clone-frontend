import React from 'react';
import Header from '../Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
