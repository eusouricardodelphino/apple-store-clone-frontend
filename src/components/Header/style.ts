import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;

  display: flex;
  flex-direction: row;

  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style: none;

    li {
      padding: 0 10px;

      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.92);
        padding: 5px 0;
        &:hover {
          color: rgba(90, 90, 90, 0.92);
        }
      }
    }
  }
`;
