import React from 'react';

import { Container } from './style';

const Footer: React.FC = () => (
  <Container>
    <p>© {new Date().getFullYear()} Apple Inc.</p>
  </Container>
);

export default Footer;
