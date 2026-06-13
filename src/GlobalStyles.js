import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000;
    color: #e0e0e0;
    font-family: 'JetBrains Mono', monospace;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  ::selection {
    background: #00ff41;
    color: #000;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }
  ::-webkit-scrollbar-thumb {
    background: #1a1a1a;
    border: 1px solid #333;
  }
`;

export default GlobalStyles;