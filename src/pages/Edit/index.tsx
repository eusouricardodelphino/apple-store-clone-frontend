import React from 'react';

import Form from '../../components/Form';
import { Title } from './style';

const Edit: React.FC = () => (
  <>
    <Title>Editar produto</Title>
    <Form method="post" />
  </>
);

export default Edit;
