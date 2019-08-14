import { createGlobalStyle } from 'styled-components';

// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,900&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
    min-height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: #201E2A;
    display: flex;
    width: 100%;
  }
  .clear{clear: both}
  #root{ margin-bottom: 20px; display: block; width:100% }
  body, input, button, textarea{
    font: 14px 'Roboto', sans-serif;
  }
  a{ text-decoration: none; }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }
  #logo{
    display: inline-block;
    color: #f84d69;
    font-weight: 900;
    font-size:50px;
    text-shadow: 0px 3px 0 #982E40, 0 5px 8px rgba(0,0,0,0.6);
    line-height: 39px;
  }
  #logo::before{
    content: 'M';
  }
`;
