import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "typeface-montserrat";
import { Theme } from "./types/types";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Montserrat, sans-serif;
    color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
    background-color: ${(p: { theme: Theme }) => p.theme.color.bg};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none
  }
  button {
	cursor:pointer;
  }
`;
