import styled from 'styled-components';

export const Container = styled.div`
  max-width: 959px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    h1 {
      font-weight: 100;
    }

    button {
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
  ul {
    list-style: none;
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.5);
  border-bottom: solid 1px rgba(255, 200, 200, 0.18);
  color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 0 5px 0;
  transition: background 0.2s;

  opacity: ${props => (props.past ? 0.4 : 1)};

  a {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 16px;
  }
  time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 20px;
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover time {
    color: #bb394f;
  }
`;
