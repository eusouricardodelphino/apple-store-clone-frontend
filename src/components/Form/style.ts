import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;

  div {
    width: 100%;
  }

  label {
    margin: 10px 0;
  }

  input,
  textarea {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
  }
`;
