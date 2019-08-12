import styled from 'styled-components';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  position: relative;

  form {
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      display: block;
      width: 100%;
      position: relative;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0;
    }

    span {
      color: #fb6f91;
      align-self: flex-end;
      text-transform: uppercase;
      font-size: 9px;
      position: absolute;
      margin-top: -25px;
      right: 0;
      padding: 0 5px;
      margin-bottom: -11px;
    }

    button {
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0;
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
