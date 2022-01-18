import React from 'react';
import { useParams } from 'react-router-dom';

const Show: React.FC = () => {
  const { productId } = useParams();

  return <h1>Show {productId}</h1>;
};

export default Show;
