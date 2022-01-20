import styled from 'styled-components';

export const Title = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

export const Container = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;

  img {
    max-height: 700px;
  }

  button[type='submit'] {
    margin-top: 10px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    line-height: 1.17648;
    font-weight: 400;
    letter-spacing: -0.022em;
    min-width: 28px;
    padding: 8px 16px;
    border: none;
    border-radius: 980px;
    background: #0071e3;
    color: #fff;
    margin: 20px 0;
  }
`;
