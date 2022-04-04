import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Beer } from "../../models/beerModel";
import AddBeer from "../addBeer/AddBeer";
import Search from "../search/Search";
import { setBeers, getBeersAsync, selectBeers } from "./beersSlice";

function Beers() {
  const beers = useSelector(selectBeers);

  return (
    <section>
      <h1>Beers</h1>

      <Search />

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
    </section>
  );
}

export default Beers;
