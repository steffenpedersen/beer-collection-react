import React from "react";
import BeersList from "../../components/beersList/BeersList";
import Search from "../../components/search/Search";

function HomePage() {
  return (
    <div>
      <Search />
      <BeersList />
    </div>
  );
}

export default HomePage;
