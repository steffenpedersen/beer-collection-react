import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useBoop from "../../hooks/useBoop";
import { Background, Container } from "./Shared";

interface Props {
  link: string;
  text: string;
}

const ButtonContainer = styled(Link)`
  ${Container}
`;

function ButtonLink(props: Props) {
  const [style, trigger] = useBoop({ scale: 1.02 });

  return (
    <ButtonContainer onMouseEnter={trigger} to={props.link}>
      <Background
        // @ts-ignore
        style={style}
      />
      {props.text}
    </ButtonContainer>
  );
}

export default ButtonLink;
