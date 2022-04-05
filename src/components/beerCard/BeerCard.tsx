import React from "react";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
import styled from "styled-components";
import useBoop from "../../hooks/useBoop";

interface BeerCardProps {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
}

const Route = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const Background = styled(animated.span)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0px;
  border-radius: 10px;
  transform-origin: center center;

  background: #ffffff95;
`;

export const Card = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 35px;
  transition: background 350ms ease 0s;

  cursor: pointer;

  box-shadow: 25px 25px 80px rgba(0, 0, 0, 0.07);

  &:hover ${Background} {
    background: ${(props) => props.theme.color.white};
  }
`;

const Heading = styled.h3`
  min-height: 45px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;

  background: ${(props) => props.theme.color.yellow};
  padding: 35px;
  border-radius: 8px;
  box-shadow: 25px 25px 80px rgba(0, 0, 0, 0.07);
`;

const Image = styled.img`
  max-height: 100%;
  width: auto;
`;

const Tagline = styled.p`
  color: #00000095;
  font-size: 0.9rem;
`;

function BeerCard(props: BeerCardProps) {
  const [style, trigger] = useBoop({ scale: 1.02 });

  return (
    <Route to={`/beer/${props.id}`}>
      <Card
        // @ts-ignore
        onMouseEnter={trigger}
      >
        <Heading>{props.name}</Heading>
        <ImageContainer>
          <Image src={props.image_url} alt={props.name} />
        </ImageContainer>
        <Tagline>{props.tagline}</Tagline>

        {/* @ts-ignore */}
        <Background style={style} />
      </Card>
    </Route>
  );
}

export default BeerCard;
