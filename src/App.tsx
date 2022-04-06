import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getBeersAsync } from "./redux/beersSlice";
import Header from "./components/header/Header";
import { Wrapper } from "./css/helpers";
import AddBeerPage from "./pages/addBeer/AddBeerPage";
import BeerDetailPage from "./pages/beerDetail/BeerDetailPage";
import HomePage from "./pages/home/HomePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeersAsync());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beer/:id" element={<BeerDetailPage />} />
          <Route path="/add-beer" element={<AddBeerPage />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
