import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Beer } from "../../models/beerModel";
import BeerCard from "../beerCard/BeerCard";
import { selectBeers } from "./beersSlice";

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

  return (
    <Grid>
      {beers.map((beer: Beer) => (
        <li>
          <BeerCard
            id={beer.id}
            name={beer.name}
            image_url={beer.image_url}
            tagline={beer.tagline}
          />{" "}
        </li>
      ))}
    </Grid>
  );
}

export default BeersList;
