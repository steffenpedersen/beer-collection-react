import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MaxWidth } from "../../css/helpers";
import logo from "./duff.png";


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;

  ${MaxWidth}
`;

const HeaderLink = styled(Link)`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${(props) => props.theme.sizes.lg};
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.yellow};
    text-decoration: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" width={100} />
      </Link>
      <HeaderLink to="/add-beer">Add beer</HeaderLink>
    </HeaderContainer>
  );
}

export default Header;
