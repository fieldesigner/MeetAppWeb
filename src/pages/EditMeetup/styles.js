import styled from 'styled-components';

export const Container = styled.div`
  max-width: 959px;
  margin: 30px auto;
  position: relative;
  form {
    display: block;
    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    textarea {
      height: 130px;
      padding-top: 10px;
    }
    button[type='submit'] {
      position: relative;
      float: right;
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

    img {
      border-radius: 5px;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
`;
