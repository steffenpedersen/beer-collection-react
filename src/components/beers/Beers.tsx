import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Beer } from "../../models/beerModel";
import AddBeer from "../addBeer/AddBeer";
import Search from "../search/Search";
import { setBeers, getBeersAsync, selectBeers } from "./beersSlice";

function Beers() {
  const dispatch = useDispatch();
  const beers = useSelector(selectBeers);

  useEffect(() => {
    dispatch(getBeersAsync());
  }, [dispatch]);

  return (
    <section>
      <h1>Beers</h1>

      <Search />

      <ul>
        {beers.map((beer: Beer) => (
          <li key={beer.id}>
            {beer.name}
            <img src={beer.image_url} width={25} alt="" />
          </li>
        ))}
      </ul>

      <AddBeer />
    </section>
  );
}

export default Beers;
