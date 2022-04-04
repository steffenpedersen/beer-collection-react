import React from "react";
import Beers from "../../components/beers/Beers";
import Search from "../../components/search/Search";

function HomePage() {
  return (
    <div>
      <Search />
      <Beers />
    </div>
  );
}

export default HomePage;
