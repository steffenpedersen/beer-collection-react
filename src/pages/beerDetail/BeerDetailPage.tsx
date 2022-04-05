import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBeerAsync,
  selectBeer
} from "../../components/beersList/beersSlice";

function BeerDetailPage() {
  const dispatch = useDispatch();
  const beer = useSelector(selectBeer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBeerAsync(id!));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} width={200} alt="" />
    </div>
  );
}

export default BeerDetailPage;
