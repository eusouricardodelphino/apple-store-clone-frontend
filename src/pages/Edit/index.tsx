import React from 'react';
import { useParams } from 'react-router-dom';

const Edit: React.FC = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>Edit {productId}</h1>
    </div>
  );
};

export default Edit;
