import React from 'react';
import { Link } from 'react-router-dom';
import { BsApple } from 'react-icons/bs';

import { Container } from './style';

const Header: React.FC = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">
          <BsApple size={26} />
        </Link>
      </li>
      <li>
        <Link to="/new">Novo produto</Link>
      </li>
    </ul>
  </Container>
);

export default Header;
