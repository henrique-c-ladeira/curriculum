import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import backgroundImage from '../assets/imgs/background.png';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${colors.primaryText};
    /* background: linear-gradient(${colors.light}, ${colors.background}); */
    background-color: ${colors.background};
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    /* background-size: cover; */
    min-height: 100vh;
    min-width: 100vw;
    cursor: default;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;

    &:active {
      animation: anima normal 0.1s linear;
      @keyframes anima {
        0% {transform: scale(1);}//{transform: rotate(0deg);}
        100% {transform: scale(1.2);}//{transform: rotate(-5deg);}
        //70% {transform: rotate(0deg);}
        //100% {transform: rotate(-5deg);}
      }
    }
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }


  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    margin: none;
    color: inherit;
    &:visited {
      color: inherit;
    }

  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  select {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
  }

  .icon{
    color: ${colors.primaryDark};
    vertical-align: middle;
    &:hover {
      color: ${colors.primary};
      text-shadow:0px 0px 30px ${colors.dark};
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
  }
`;
