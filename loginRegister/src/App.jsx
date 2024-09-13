import React, { useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Register from "./register/register";
import Login from "./login/login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}> 
           <Route index element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="register" element={<Register/>}/>
           <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
  );
}

export default App;
