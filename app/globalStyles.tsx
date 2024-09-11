import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root {
    --max-width: 1100px;
    
    --color-gray-light: #e3e3e4;
    --color-secondary-light: #27cfb1;
    --color-secondary: #008b5d;
    --color-dark: #000000;
    --color-primary: #1688fe;
    --color-gray: #595964;
    --color-danger: #F25773;
    --color-green: #27CFB1;
  
    --size-text-medium: 15px;
    --size-list-text: 13px;
    --size-text-sm: 11px;
    --size-text-title-h4: 24px;
    --size-text-title-h5: 17px;
  }

  @font-face {
    font-family: 'Gilroy-Bold';
    src: url('/fonts/Gilroy-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Heavy';
    src: url('/fonts/Gilroy-Heavy.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy-Light';
    src: url('/fonts/Gilroy-Light.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('/fonts/Gilroy-Medium.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy-Regular.woff';
    src: url('/fonts/Gilroy-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .text-gray-light {
    color: var(--color-gray-light);
  }
  
  .text-gray {
    color: var(--color-gray);
  }
  
  /*Typographie*/
  h4 {
    line-height: 20px;
    font-size: var(--size-text-title-h4);
    font-family: "Gilroy-Medium";
  }
  h5 {
    font-size: var(--size-text-title-h5);
  }
  p {
    line-height: 22px;
    font-size: var(--size-text-medium);
    font-family: "Gilroy-Medium"
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  .main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  .list-item-title {
    line-height: 20px;
    font-size: var(--size-text-medium);
    font-family: "Gilroy-Bold";
    color: var(--color-dark);
  }
  .list-item-text {
    line-height: 20px;
    font-size: var(--size-list-text);
    font-family: "Gilroy-Bold";
    color: var(--color-gray);
  }
  
  .hidden {
    visibility: hidden !important;
  }
  
  .rounded-div {
    border-radius: 50%;
    object-fit: contain;
  }
  
  /*colors*/
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  
  .text-secondary {
    background-color: var(--color-secondary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  .text-medium {
    font-size: var(--size-text-medium);
  }
  .text-gray {
    color: var(--color-gray);
  }
  .icon-side {
    width: 16px;
    height: 16px;
  }
  .text-danger {
    color: var(--color-danger);
  }
  
  .text-bold {
    font-family: "Gilroy-Bold";
  }
  .text-dark {
    color: var(--color-dark);
  }
  
  /*container*/
  .container {
    margin-left: auto;
    margin-right: auto;
    padding: 32px 60px 0px 60px;
    width: 100%;
    max-width: 960px;
  }
  
  .link {
    color: var(--color-primary);
  }
  
`;