import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBeersAsync } from "../beers/beersSlice";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(getBeersAsync(search));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
