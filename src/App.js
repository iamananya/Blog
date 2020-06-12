import React from "react";
import "./App.css";
import Land from "./components/Land";
import Navigate from "./components/Navigate";
import HeadCards from "./components/HeadCards";
import SubscribeComponent from "./components/SubscribeComponent";
import FooterComponent from "./components/FooterComponent";

import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Land />
      <div className="responsive">
        <img className="title" src="../images/logo_black_croped2.png"></img>
        <Navigate />
      </div>
      <HeadCards />
      <Blog />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
