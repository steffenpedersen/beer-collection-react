import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Beer } from "../../models/beerModel";
import { selectBeers } from "./beersSlice";

function Beers() {
  const beers = useSelector(selectBeers);

  return (
    <ul>
      {beers.map((beer: Beer) => (
        <li key={beer.id}>
          <Link to={`/beer/${beer.id}`}>
            {beer.name}
            <img src={beer.image_url} width={25} alt="" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Beers;
