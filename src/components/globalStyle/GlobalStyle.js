import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/wano.png';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;
