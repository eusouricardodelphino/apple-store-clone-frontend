import React, { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container } from './style';
import api from '../../services/api';

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File>();
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleImageUploadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const imageToSend = new FormData();

      imageToSend.append('product_img', file);

      await api.patch(`/products/${productId}/image`, imageToSend);

      navigate(`/products/${productId}`);
    }
  };

  return (
    <Container method="post" onSubmit={handleImageUploadSubmit}>
      <input
        type="file"
        name="product_img"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <button type="submit">Adicionar Imagem</button>
    </Container>
  );
};

export default ImageUpload;
