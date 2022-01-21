import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 30px;

  h1 {
    padding-bottom: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  background-color: #f5f5f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);

  th,
  tr,
  td {
    flex: 1;
    display: flex;
  }

  tr {
    padding: 5px;
  }

  tbody tr {
    border-top: 1px solid #6e6e73;
    background: #e9e9e9;
    &:nth-child(even) {
      background: #f5f5f7;
    }
  }

  th,
  td {
    justify-content: center;
    align-items: center;
  }

  img {
    width: 50px;
    height: 40px;
  }

  td a,
  button {
    padding: 0 5px;
  }

  button {
    border: none;
    background: transparent;
  }

  a {
    color: #000;
  }
`;
