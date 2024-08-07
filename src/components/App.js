import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
    </>
  );
};

export default App;
