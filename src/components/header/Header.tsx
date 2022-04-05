import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MaxWidth } from "../../css/helpers";
import ButtonLink from "../button/ButtonLink";
import logo from "./duff.png";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;

  ${MaxWidth}

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 40px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" width={100} />
      </Link>
      <ButtonLink link="/add-beer" text={"Add beer"} />
    </HeaderContainer>
  );
}

export default Header;
