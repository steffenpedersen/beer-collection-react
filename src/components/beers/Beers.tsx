import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Beer } from "../../models/beerModel";
import { setBeers, getBeersAsync, selectBeers } from "./beersSlice";

function Beers() {
  const dispatch = useDispatch();
  const beers = useSelector(selectBeers);

  useEffect(() => {
    dispatch(getBeersAsync());
  }, []);

  return (
    <section>
      <h1>Beers</h1>
      <ul>
        {beers.map((beer: Beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Beers;
