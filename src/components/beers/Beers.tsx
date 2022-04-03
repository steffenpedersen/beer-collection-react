import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBeers, getBeersAsync, selectBeers } from "./beersSlice";

function Beers() {
  const dispatch = useDispatch();
  const beers = useSelector(selectBeers);

  useEffect(() => {
    dispatch(getBeersAsync());
  }, []);

  return <h1>Beers</h1>;
}

export default Beers;
