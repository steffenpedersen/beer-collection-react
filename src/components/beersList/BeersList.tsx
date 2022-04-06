import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ErrorMessage, IdleMessage } from "../../css/helpers";
import { Beer } from "../../models/beerModel";
import BeerCard from "../beerCard/BeerCard";
import { selectBeers, selectBeersStatus } from "../../redux/beersSlice";

const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 50px 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

function BeersList() {
  const beers = useSelector(selectBeers);
  const { status, errorMessage } = useSelector(selectBeersStatus);

  return (
    <Grid>
      {status !== "failed" &&
        beers.map((beer: Beer) => (
          <li key={beer.id}>
            <BeerCard
              id={beer.id}
              name={beer.name}
              image_url={beer.image_url}
              tagline={beer.tagline}
            />{" "}
          </li>
        ))}
      {status === "loading" && <IdleMessage>Loading...</IdleMessage>}
      {status === "failed" && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Grid>
  );
}

export default BeersList;
