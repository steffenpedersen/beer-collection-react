import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Beer } from "../../models/beerModel";
import { setBeers, getBeersAsync, selectBeers } from "./beersSlice";

function Beers() {
  const dispatch = useDispatch();
  const beers = useSelector(selectBeers);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getBeersAsync());
  }, [dispatch]);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(getBeersAsync(search));
  };

  return (
    <section>
      <h1>Beers</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
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
