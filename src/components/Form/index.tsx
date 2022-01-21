import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './style';
import FormProps from '../../interfaces/FormProps';

const Form: React.FC<FormProps> = ({ method }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const getProduct = useCallback(async (id: number | string) => {
    const response = await api.get(`/products/${id}`);
    const product = response.data;

    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, []);

  const handleSubmitProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (productId) {
      await api.put(`/products/${productId}`, { name, price, description });
    } else {
      await api.post('/products', { name, price, description });
    }

    navigate('/');
  };

  useEffect(() => {
    if (productId) {
      getProduct(productId);
    }
  }, []);

  return (
    <Container method={method} onSubmit={handleSubmitProduct}>
      <div>
        <label htmlFor="Nome">
          Nome
          <input
            type="text"
            placeholder="Ex: Macbook Pro 15"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <label htmlFor="price">
        Preço
        <input
          type="number"
          name="price"
          placeholder="Ex: 1200.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        Descrição
        <textarea
          placeholder="Coloque uma descrição bem chamativa"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Cadastrar Produto</button>
    </Container>
  );
};

export default Form;
