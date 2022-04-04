import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectBeer, getBeerAsync } from "../beers/beersSlice";

function BeerDetail() {
  const dispatch = useDispatch();
  const beer = useSelector(selectBeer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBeerAsync(id!));
  }, [dispatch, id]);

  return (
    <section>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} width={200} alt="" />
    </section>
  );
}

export default BeerDetail;
