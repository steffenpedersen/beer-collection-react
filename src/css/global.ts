import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  /* Headings */

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.families.heading};
    font-weight: 700;
    color: ${(props) => props.theme.color.black};
  }

  h1,
  h2,
  h3 {
    line-height: 1.25;
  }

  h4,
  h5,
  h6,
  p {
    line-height: 1.6;
  }

  h1 {
    font-size: ${(props) => props.theme.sizes.xl};
    margin-top: 0.67em;
    margin-bottom: 0.67em;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      font-size: ${(props) => props.theme.sizes.xxl};
    }
  }

  h2 {
    font-size: ${(props) => props.theme.sizes.lg};
    margin-top: 0.83em;
    margin-bottom: 0.83em;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      font-size: ${(props) => props.theme.sizes.xl};
    }
  }

  h3 {
    font-size: ${(props) => props.theme.sizes.md};
    margin-top: 1em;
    margin-bottom: 1em;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      font-size: ${(props) => props.theme.sizes.md};
    }
  }

  h4 {
    font-size: ${(props) => props.theme.sizes.md};
    margin-top: 1.33em;
    margin-bottom: 1.33em;
  }

  h5 {
    font-size: ${(props) => props.theme.sizes.sm};
    margin-top: 1.67em;
    margin-bottom: 1.67em;
  }

  h6 {
    font-size: ${(props) => props.theme.sizes.sm};
    margin-top: 2.33em;
    margin-bottom: 2.33em;
  }

  /* Images */

  img {
    max-width: 100%;
    height: auto;
  }

  /* Links */

  a {
    color: inherit;

    &:link,
    &:visited {
      text-decoration: none;
    }

    &:active,
    &:hover {
      text-decoration: underline;
    }
  }

  /* Page */

  html {
    font-family: ${(props) => props.theme.families.body};
    line-height: 1.6;
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.ivory};
  }
`;
