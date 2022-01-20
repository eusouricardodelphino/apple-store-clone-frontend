import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsPencil, BsTrash, BsCamera } from 'react-icons/bs';

import api from '../../services/api';
import Product from '../../interfaces/Product';

import { Container, Table } from './style';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await api.get('/products');

    const responseProducts = response.data;

    setProducts(responseProducts);
  };

  const deleteProduct = async (productToDeleteId: number) => {
    await api.delete(`http://localhost:3333/products/${productToDeleteId}`);

    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <h1>Itens</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome do produto</th>
            <th>Preço</th>
            <th>Thumb</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan={5}>Nenhum produto cadastrado</td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>U$ {product.price.toFixed(2)}</td>
              <td>
                {product.image ? (
                  <img
                    src={`http://localhost:3333/files/${product.image}`}
                    alt=""
                  />
                ) : (
                  <BsCamera size={50} />
                )}
              </td>
              <td>
                <Link to={`/products/${product.id}`}>
                  <BsEye size={18} />
                </Link>
                <Link to={`/products/${product.id}/edit`}>
                  <BsPencil size={18} />
                </Link>
                <button type="button" onClick={() => deleteProduct(product.id)}>
                  <BsTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
