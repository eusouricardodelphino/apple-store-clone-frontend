import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';

import api from '../../services/api';
import Product from '../../interfaces/Product';

import { Container, Details } from './style';

const Show: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();

  const getProduct = useCallback(async () => {
    const response = await api.get(`/products/${productId}`);

    setProduct(response.data);
  }, []);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Container>
      <h1>{product?.name}</h1>
      <Details>
        {product?.image ? (
          <img src={`http://localhost:3333/files/${product.image}`} alt="" />
        ) : (
          <img src="" alt="Adicione uma imagem aqui" />
        )}

        <div>
          <h3>Descrição</h3>
          <p>{product?.description}</p>

          <p>
            <strong>Preço: </strong>U$ {product?.price.toFixed(2)}
          </p>
          <Link to={`/products/${product?.id}/edit`}>
            <BsPencil /> Editar produto
          </Link>
          <Link to={`/products/${product?.id}/image`}>Adicionar imagem</Link>
        </div>
      </Details>
    </Container>
  );
};
export default Show;
