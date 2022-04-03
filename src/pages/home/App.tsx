import React from "react";
import logo from "./duff.png";
import { Counter } from "./../../components/counter/Counter";
import List from "../../components/list/List";
import Information from "../../components/information/Information";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" width={100} />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/beer/:beer" element={<Information />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
