import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import BeerInfo from "./containers/BeerInfo/BeerInfo";
import Footer from "./components/Footer/Footer";

function App() {
  const [beers, setBeers] = useState();

  const getBeers = async () => {
    let tempArr = [];
    let counter = 1;
    let isEmptyReturn = false;
    while (!isEmptyReturn) {
      const url = `https://api.punkapi.com/v2/beers?per_page=80&page=${counter}`; 
      const res = await fetch(url);
      const data = await res.json();
      counter++;
      if (!data.length) {
        isEmptyReturn = true;
      } else {
        tempArr = tempArr.concat(await data);
      }
    }
    
    setBeers(tempArr);
  };

  useEffect(() => {
    getBeers();
  }, []);
  
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/beers/:beerId"
          element={
            <BeerInfo beersArr={beers} />
          }
        />

        <Route 
          path="/" 
          element={
            <Home 
              beersArr={beers} 
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
