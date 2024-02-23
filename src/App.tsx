import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Cases from "./pages/Cases/Cases";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import Calculation from "./pages/Calculation/Calculation";
import Price from "./pages/Price/Price";
import Partner from "./pages/Partner/Partner";
import './styles/_global.scss';

import { Context, createContext, useContext, useState } from 'react';
import { calculationType } from "./types/calculationType";

const initialValue: calculationType = {
    pages: '0',
    functions: [],
    customers: '0'
}

export const CalculationContext = createContext(initialValue);

function App() {
  const [calcParams, setCalcParams] = useState(initialValue)

  const calcHandler = (value: calculationType) => {
    setCalcParams(value)
  }

  return (
    <CalculationContext.Provider value={calcParams}>
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="partners" element={<Partners />} />
            <Route path="partner" element={<Partner />} />
            <Route path="cases" element={<Cases />} />
            <Route path="calculation" element={<Calculation calc={calcHandler}/>} />
            <Route path="price" element={<Price />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </div>
  </CalculationContext.Provider>
  );
}

export default App;
