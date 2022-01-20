import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  h1 {
    margin: 30px 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;

  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);

  img {
    width: 500px;
  }

  div {
    padding: 20px;
  }
  p {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
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
    border-radius: 980px;
    background: #0071e3;
    color: #fff;

    & + a {
      margin-top: 10px;
    }
  }
`;
