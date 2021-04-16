import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./component/Country";
import Cart from "./component/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const addHandleButton = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <div className="details">
        <h1>Countries name : {countries.length}</h1>
        <h2>Country added : {cart.length}</h2> 
         <Cart cart={cart}> </Cart>
      </div>

    

      <ul>
        {countries.map((country) => (
          <Country
            addHandleButton={addHandleButton}
            country={country}
          ></Country>
        ))}
      </ul>
    </div>
  );
}

export default App;
