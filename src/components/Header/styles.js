import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-bottom: solid 1px rgba(255, 200, 200, 0.18);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 74px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo {
    font-size: 38px;
  }
  aside {
    display: flex;
    align-items: center;

    button {
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
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      &:hover {
        color: #f84d69;
      }
    }
  }
`;
