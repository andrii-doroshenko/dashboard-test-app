import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #000;
  letter-spacing: -0.14px;
  background: #fafbff;
}

h1 {
  font-size: 26px;
}

h2, p {
  margin: 0;
}

ul,li{
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}
`;

export default GlobalStyle;
