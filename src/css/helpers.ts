import { css } from "styled-components";

export const MaxWidth = css`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  
  padding-left: 20px;
  padding-right: 20px;
  
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    max-width: 1240px;
    padding-left: 50px;
    padding-right: 50px;
  }
`
