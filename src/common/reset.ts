import { createGlobalStyle } from 'styled-components';
import bg_pattern from '../images/bg_pattern.svg';

export const GlobalStyle = createGlobalStyle`
  
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 15px;
  line-height: 1em;
  vertical-align: baseline;
  font-family: 'Hahmlet', serif;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul,
li{
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  width: 100%;
  height: auto;
}
img,
button {
  vertical-align: top;
}

body {
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}

`;
