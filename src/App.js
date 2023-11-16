import React from "react"
import './App.css';

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/NAVBAR";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error"
import AuthLoReg from "./components/AuthLoReg"
import Notecontest from "./context/contentstate";
import Redux from "./components/redux"
const App = () => {

    return (
      <>
      <Notecontest>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Services" element={<Services />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/signin" element={<AuthLoReg />}></Route>
        </Routes>
        <Route path ="*" element= {<Error />}></Route>
        <Route exact path="/redux" element={<Redux />}></Route>
        </Notecontest>

      </>

    );
  }

export default App;
