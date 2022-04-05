import React from "react";
import styled from "styled-components";
import useBoop from "../../hooks/useBoop";
import { Background, Container } from "./Shared";

interface Props {
  link: string;
  text: string;
}

const ButtonContainer = styled.a`
  ${Container}
`;

function ButtonLink(props: Props) {
  const [style, trigger] = useBoop({ scale: 1.02 });

  return (
    <ButtonContainer
      // @ts-ignore
      onMouseEnter={trigger}
      href={props.link}
    >
      {/* @ts-ignore */}
      <Background style={style} />
      {props.text}
    </ButtonContainer>
  );
}

export default ButtonLink;
