import styled, { css } from "styled-components";

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
export const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  
  ${MaxWidth}
`;

export const Input = styled.input`
  display: block;
  font-size: ${(props) => props.theme.sizes.md};
  border: 0;
  appearance: none;
  border-radius: 8px;
  padding: 20px;
  width: 100%;

  &:focus {
    outline: 0;
    border-bottom: 4px solid ${(props) => props.theme.color.yellow};
  }
`;

export const InputFile = styled.input`
  display: block;
  text-align: center;
  background: ${props => props.theme.color.white};;
  border: 2px solid ${props => props.theme.color.black};
  border-radius: 6px;
  padding: 10px 20px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 700;

&::-webkit-file-upload-button {
  visibility: hidden;
}
&:hover {
  border-color: black;
}

  
`;