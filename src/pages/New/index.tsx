import React from 'react';

import Form from '../../components/Form';
import { Title } from './style';

const New: React.FC = () => (
  <>
    <Title>Novo produto</Title>
    <Form method="post" />
  </>
);

export default New;
