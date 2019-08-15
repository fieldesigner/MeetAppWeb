import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 0;
  border-radius: 4px;
  margin-bottom: 10px;

  label {
    display: block;
    text-align: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    clear: both;
    cursor: pointer;

    &:hover {
      opacity: 07;
    }
    img {
      height: auto;
      min-height: 250px;
      width: 100%;
      border-radius: 5px;
    }
    input {
      display: none;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      color: #fff;
      min-height: 200px;
      span {
        display: block;
      }
    }
  }
`;
