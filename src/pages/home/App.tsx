import React, { useEffect } from "react";
import logo from "./duff.png";
import { Counter } from "./../../components/counter/Counter";
import Beers from "../../components/beers/Beers";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MaxWidth } from "../../css/helpers";
import BeerDetail from "../../components/beerDetail/BeerDetail";
import { useDispatch, useSelector } from "react-redux";
import { selectBeers, getBeersAsync } from "../../components/beers/beersSlice";
import AddBeer from "../../components/addBeer/AddBeer";

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 50px;
  ${MaxWidth}
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeersAsync());
  }, [dispatch]);

  return (
    <div>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <Link to="/add-beer">Add beer</Link>
      </Header>
      <Routes>
        <Route path="/" element={<Beers />} />
        <Route path="/beer/:id" element={<BeerDetail />} />
        <Route path="/add-beer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
