import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Beer } from "../../models/beerModel";
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
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(
            setBeers([
              {
                id: 1,
                name: "Beer 1",
                tagline: "Tagline 1",
                description: "Description 1",
                image_url: "https://via.placeholder.com/150",
              },
            ])
          )
        }
      >
        Add
      </button>
    </section>
  );
}

export default Beers;
