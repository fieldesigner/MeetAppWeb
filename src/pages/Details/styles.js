import styled from 'styled-components';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    h1 {
      font-weight: 100;
      text-transform: capitalize;
    }
    div {
      display: flex;
    }
    div > button:first-child {
      background: #4dbaf7;
    }
    div > button:first-child:hover {
      background: #327ba5;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0 10px;
      background: #f84d69;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;
      padding: 10px 15px;

      &:hover {
        background: #bb394f;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;
