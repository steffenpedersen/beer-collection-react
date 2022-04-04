import React, { useEffect } from "react";
import logo from "./duff.png";
import { Counter } from "./../../components/counter/Counter";
import Beers from "../../components/beers/Beers";
import Information from "../../components/information/Information";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MaxWidth } from "../../css/helpers";

const Header = styled.header`
  ${MaxWidth}
`;

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt="logo" width={100} />
      </Header>
      <Routes>
        <Route path="/" element={<Beers />} />
        <Route path="/beer/:beer" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
