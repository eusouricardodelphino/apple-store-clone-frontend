import React, { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Title } from './style';
import api from '../../services/api';

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState<string>();
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

  const handleInputFileChange = (event: any) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImgSrc(reader.result);
        }
      };
    }
  };

  return (
    <Container method="post" onSubmit={handleImageUploadSubmit}>
      <Title>Faça o ipload de uma imagem respesentativa</Title>
      <button type="submit">Adicionar Imagem</button>
      {imgSrc && <img src={imgSrc} alt="Preview da imagem para upload" />}
      <input type="file" name="product_img" onChange={handleInputFileChange} />
    </Container>
  );
};

export default ImageUpload;
