import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: hsl(190,100%,9%);
    font-family: 'Merriweather', serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.7;
    line-height: 1.5;
  }

  img { 
    max-width: 100%;
  }

  #nprogress .bar{
    background-color: ${({ theme }) => theme.colors.footer} !important;
  }

  #nprogress .spinner-icon {
    border-top-color: ${({ theme }) => theme.colors.footer};
    border-left-color: ${({ theme }) => theme.colors.footer};
  }
`

export default GlobalStyles