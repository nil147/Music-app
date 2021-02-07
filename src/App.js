import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Download from "./components/Download";
import Footer from "./components/Footer";
import GoTop from './components/GoTop';


import Main from "./components/Main";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Sell from "./components/Sell";
import Test from "./components/Test";
import UpComing from "./components/UpComing";

function App() {


  return (
    <div className="app">
      <GoTop />
      <Nav />
      <Main />
      <Test />
      <Banner />
      <About />
      <Sell />
      <UpComing />
      <Partners />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
