import * as React from "react";
/** @type {import('tailwindcss').Config} */
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import MultiForms from "./components/MultiForms";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <BrowserRouter>
    
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/multiforms" element={<MultiForms/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
