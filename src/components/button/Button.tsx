import React from "react";
import styled from "styled-components";
import useBoop from "../../hooks/useBoop";
import { Background, Container } from "./Shared";

interface Props {
  onClick?: any;
  text: string;
  type: "submit" | "reset" | "button" | undefined;
}

const ButtonContainer = styled.button`
  ${Container}
`;

function Button(props: Props) {
  const [style, trigger] = useBoop({ scale: 1.02 });

  return (
    <ButtonContainer
      onMouseEnter={trigger}
      onClick={props.onClick}
      type={props.type}
    >
      <Background
        // @ts-ignore
        style={style}
      />
      {props.text}
    </ButtonContainer>
  );
}

export default Button;
