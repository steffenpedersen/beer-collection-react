import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getBeerAsync,
  selectBeer,
} from "../../components/beersList/beersSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: row;
    gap: 100px;
  }
`;

const Text = styled.p`
  flex: 3;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;

  background: ${(props) => props.theme.color.yellow};
  padding: 35px;
  border-radius: 8px;
  box-shadow: 25px 25px 80px rgba(0, 0, 0, 0.07);

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex: 1;
  }
`;

const Image = styled.img`
  max-height: 100%;
  width: auto;
`;

function BeerDetailPage() {
  const dispatch = useDispatch();
  const beer = useSelector(selectBeer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBeerAsync(id!));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{beer.name}</h1>
      <h2 style={{ color: "#00000099" }}>{beer.tagline}</h2>
      <Container>
        <Text>{beer.description}</Text>
        <ImageContainer>
          <Image src={beer.image_url} alt={beer.name} />
        </ImageContainer>
      </Container>
    </div>
  );
}

export default BeerDetailPage;
