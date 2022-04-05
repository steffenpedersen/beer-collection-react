import { animated } from "react-spring";
import styled, { css } from "styled-components";

export const Container = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-size: .9rem;
  font-weight: 700;
  line-height: 1;

  outline: none;
  border: none;

  color: ${props => props.theme.color.white};

  z-index: 100;

  &:hover {
    text-decoration: none;
  }
`;

export const Background = styled(animated.span)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0px;
  border-radius: 100px;
  transform-origin: center center;

  background: ${(props) => props.theme.color.black};
`;